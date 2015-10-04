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
      newExercise[i].order = workout.exercises[i].order - 1;
    });
    // console.log(maxOrder, newExercise);
    var next = _.chain(newExercise).pluck("order").indexOf(-1).value();
    // console.log(next);
    newExercise[next].order = maxOrder;
    workout.set('exercises', newExercise);
    Meteor.call('saveDocs', workout);
  }
})
