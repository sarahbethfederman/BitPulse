Template.exercise.onRendered(function() {
  Session.setDefault('play', false);
  Session.setDefault('timeSpent', 0);
  Tracker.autorun(function() {
    if (Session.get('play')) {
      // var duration = Session.get('currentSession').duration;
      function play() {
        var progress = Session.get('timeSpent') * 100 / duration;
        Session.set('timeSpent', Session.get('timeSpent') + 1);
        $('progress').val(progress);
        setTimeout(play, 1000);
        console.log('playing for ', timeSpend, 'seconds.');
      }
      play();
    }
  });
});

Template.exercise.helpers({
  workout: function() {
    var workoutId = FlowRouter.getParam('workoutId');
    return Workouts.findOne({
      _id: workoutId
    });
  },
  exercises: function(workout) {
    var exercises = _.sortBy(workout.exercises, 'order');
    return exercises;
    Session.set('currentExercise', exercises[0]);
  }
});

Template.exercise.events({
  'submit #newExercise': function(e, t) {
    var workout = this.exercises;
    var name = e.target.name;
    var duration = parseInt(e.target.duration);
    workout.push('exercises', {
      name: name,
      duration: duration,
      //make the order the highest order
      order: _.max(this.exercises, function(exercise) {
        return exercise.order;
      }).order + 1
    });
    Meteor.call('saveDoc', workout);
  },
  'click .playPauseWorkout': function(e, t) {
    if (Session.get('play')) {
      Session.set('play', false);
    } else {
      Session.set('play', true);
    }
  }
});
