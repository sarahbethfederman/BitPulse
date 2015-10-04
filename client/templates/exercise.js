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
    // if (id === Session.get('currentExercise')._id) {
    // return 'current';
    // }
  },
  currentName: function() {
    // return Session.get('currentExercise').name;
  }
});

Template.exercise.events({
  'click .play-exercise': function(e, t) {
    if (Session.get('play')) {
      Session.set('play', false);
    } else {
      Session.set('play', true);
    }

    var workout = Workouts.findOne({
      _id: FlowRouter.getParam('workoutId')
    });
    var data = [];
    if (workout) {
      var currentExercises = _.sortBy(workout.exercises, 'order');
      Session.set('timeSpent', 0);
      var i = 0;

      function play() {
        if (currentExercises[i]) {
          if (Session.get('timeSpent')) {
            var progress = Math.round(Session.get('timeSpent') * 100 / currentExercises[i].duration);
            $('progress#' + currentExercises[i]._id).val(progress);
          }
          // console.log(progress, currentExercises[i].duration, Session.get('timeSpent'));
          if (currentExercises[i].duration > Session.get('timeSpent')) {
            Session.set('timeSpent', Session.get('timeSpent') + 1);
            setTimeout(play, 1000);
          } else {
            i = i + 1;
            Session.set('timeSpent', 0);
            setTimeout(play, 1000, i);
          }
        } else {
          alert("Workout complete! Way to go!");
        }
      }
      play();
    }
  }
});
// var currentExercise = _.sortBy(workout.exercises, 'order')[0];
// function play(currentExercise) {
//     console.log('the new exercise', currentExercise);
//     // Session.setDefault('currentExercise', Workouts.findOne().exercises[0]);
//     var duration = currentExercise.duration;
//     console.log(currentExercise);
//     var progress = Math.round(Session.get('timeSpent') * 100 / duration);
//     console.log('playing for ', Session.get('timeSpent'), 'seconds.', progress + '%');
//     // console.log(duration);
//     // console.log(currentExercise.order);
//     if (duration < Session.get('timeSpent')) {
//       console.log("current exercise", currentExercise);
//       // _.where(workout.exercises, {order: 0});
//       Meteor.call('reorderExercises', workout, currentExercise, function(e, r) {
//         console.log(r," this should be the new value");
//         currentExercise = r;
//         if (Session.get('play')) {
//           console.log('running again');
//           setTimeout(play, 1000, currentExercise);
//         }
//         Session.set('timeSpent', 0);
//       });
//       // currentExercise = _.sortBy(workout.exercises, 'order')[0];
//     } else {
//       var session = Sess.findOne({
//         _id: FlowRouter.getParam('sessionId')
//       });
//       Session.set('timeSpent', Session.get('timeSpent') + 1);
//       $('progress#' + currentExercise._id).val(progress);
//       // console.log('#' + workout.exercises[0]._id + ' progress');
//       if (Session.get('play')) {
//         console.log('running again');
//         setTimeout(play, 1000, currentExercise);
//       }
//     }
//   }
//   if (Session.get('play')) {
//     play(currentExercise);
//   }
