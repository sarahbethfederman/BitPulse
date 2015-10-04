Meteor.methods({
  newWorkout: function(name, userId) {
    var workout = new Workout({
      name: name,
      owner: userId
    });
    Meteor.call('saveDoc', workout);
  },
  reorderExercises: function(workout, exercise) {
    // var sortFrom = exercise.order;
    var maxOrder = _.max(workout.exercises, function(exercise) {
      return exercise.order;
    }).order;
    var newExercise = [];
    workout.exercises.forEach(function(child, i) {
      newExercise[i] = workout.exercises[i];
      // newExercise[i].order = workout.exercises[i].order - 1;
      _.set(newExercise[i], 'order', workout.exercises[i].order - 1);
      console.log(child,i,workout.exercises[i].order, 'the old order value, then the new: ', workout.exercises[i].order - 1);
    });
    var last = _.findIndex(newExercise, function(ex) {
      return ex.order == -1;
    });
    var next = _.findIndex(newExercise, function(ex){
      return ex.order == 0;
    });
    console.log('old/new', workout.exercises, newExercise);
    newExercise[last].order = maxOrder;
    console.log('last', newExercise[last]);
    console.log('next', newExercise[next]);
    workout.set('exercises', newExercise);
    Meteor.call('saveDocs', workout);
    return newExercise[next];
  }
});
