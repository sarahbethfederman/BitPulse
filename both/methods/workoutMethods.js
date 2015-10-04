Meteor.methods({
  newWorkout: function(name, userId) {
    var workout = new Workout({
      name: name,
      owner: userId
    });
    Meteor.call('saveDoc', workout);
  },
  reorderExercises: function(workout, exercise) {
    var sortFrom = exercise.order;
    var maxOrder = _.max(workout.exercises, function(exercise) {
      return exercise.order;
    }).order;
    var newExercise = [];
    workout.exercises.forEach(function(exercise, i) {
      newExercise[i] = workout.exercises[i];
      // console.log(sortFrom, maxOrder, exercise.order, newExercise[i]);
      if (exercise.order < sortFrom) {
        //for exercises before the selected exercise, push them to the end
        newExercise[i].order = exercise.order + (maxOrder - sortFrom) + 1;
      } else {
        //for fragments after the selected fragment, make them next
        newExercise[i].order = exercise.order - sortFrom;
      }
    });
    workout.set('exercises', newExercise);
    Meteor.call('saveDocs', workout);
  }
})
