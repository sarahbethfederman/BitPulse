Template.createWorkout.onRendered(function() {
  var workout = new Workout();
  workout.save();
  console.log(workout);
  Session.set('currentWorkout', workout);
});

Template.createWorkout.helpers({
  exercises: function() {
    return Session.get('currentWorkout').exercises;
  },
  workout: function() {
    return workout;
  }
});

Template.createWorkout.events({
  'keyup #workout-name': _.debounce(function(event, template){
    var workout = Session.get('currentWorkout');
    workout.set('name', event.target.value);
    Meteor.call('saveDocs', workout);
    // console.log('something', event.target.value);
  }, 200),
  'submit .exercise-form form': function(event, template){
    event.preventDefault();
    var workout = Session.get('currentWorkout');
    var name = event.target.name.value;
    var duration = event.target.duration.value;
    var description = event.target.description.value;
    // console.log(name, duration, description);
    workout.push('exercises', {
      _id: new Meteor.Collection.ObjectID()._str,
      name: name,
      duration: duration,
      description: description,
      //make the order the highest order
      order: _.max(this.exercises, function(exercise) {
        return exercise.order;
      }).order + 1
    });
    console.log(workout);
    Meteor.call('saveDocs', workout);
    Session.set('currentWorkout', workout);
    console.log('done?');
  }
})
