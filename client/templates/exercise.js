Template.exercise.onRendered(function() {
  Session.setDefault('play', false);
  Session.setDefault('timeSpent', 0);
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
  },
  current: function(id) {
    if (id === Session.get('currentExercise')._id) {
      return 'current';
    }
  },
  currentName: function() {
    return Session.get('currentExercise').name;
  }
});

Template.exercise.events({
  'click .play-exercise': function(e, t) {
    if (Session.get('play')) {
      Session.set('play', false);
    } else {
      Session.set('play', true);
    }

    // (function play() {
    //   console.log('iterated');
    //   setTimeout(play, 1000);
    // })();

    var workout = Workouts.findOne({
      _id: FlowRouter.getParam('workoutId')
    });
    var data = [];
    if (workout) {
      var currentExercise = _.sortBy(workout.exercises, 'order')[0];
      function play() {
        // Session.setDefault('currentExercise', Workouts.findOne().exercises[0]);
        var duration = currentExercise.duration;
        console.log(currentExercise);
        var progress = Math.round(Session.get('timeSpent') * 100 / duration);
        console.log('playing for ', Session.get('timeSpent'), 'seconds.', progress + '%');
        // console.log(duration);
        // console.log(currentExercise.order);
        if (duration < Session.get('timeSpent')) {
          // console.log("hurray! it's over", workout, _.where(workout.exercises, {order: 0}));
          Meteor.call('reorderExercises', workout, _.where(workout.exercises, {
            order: 1
          }));
          Session.set('timeSpent', 0);
          currentExercise = _.sortBy(workout.exercises, 'order')[0];
        } else {
          var session = Sess.findOne({
            _id: FlowRouter.getParam('sessionId')
          });
        }
        Session.set('timeSpent', Session.get('timeSpent') + 1);
        $('progress#' + currentExercise._id).val(progress);
        // console.log('#' + workout.exercises[0]._id + ' progress');

        if (Session.get('play')) {
          console.log('running again');
          setTimeout(play, 1000);
        }
      }
      if (Session.get('play')) {
        play();
      }
    }
  }
});
