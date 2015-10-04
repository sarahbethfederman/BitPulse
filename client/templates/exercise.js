//where do I set the session context for this?

Template.exercise.onRendered(function() {
  Session.setDefault('play', false);
  Session.setDefault('timeSpent', 0);
  //remove this
  Session.setDefault('currentExercise', Workouts.findOne().exercises[0]);
  Tracker.autorun(function() {
    var workout = Workouts.findOne({_id: FlowRouter.getParam('workoutId')});
    function play() {
      Tracker.nonreactive(function() {
        var duration = workout.exercises[0].duration;//Session.get('currentExercise').duration;
        var progress = Math.round(Session.get('timeSpent') * 100 / duration);
        console.log('playing for ', Session.get('timeSpent'), 'seconds.', progress + '%');
        if (duration < Session.get('timeSpent')) {
          // console.log("hurray! it's over");

        } else {

        }
        Session.set('timeSpent', Session.get('timeSpent') + 1);
        $('progress').val(progress);
      });
      // console.log('second?');
      if (Session.get('play')) {
        Meteor.setTimeout(play, 1000)
      };
    }
    if (Session.get('play')) {
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
    Session.set('currentExercise', exercises[0]);
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
  'submit #newExercise': function(e, t) {
    var workout = this.exercises;
    var name = e.target.name;
    var duration = parseInt(e.target.duration);
    workout.push('exercises', {
      _id: new Meteor.Collection.ObjectID()._str,
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
