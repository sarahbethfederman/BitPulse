Template.exercise.helpers({
    workout: function(){
        var workoutId = FlowRouter.getParam('workoutId');
        return Workouts.findOne({_id: workoutId});
    },
    exercises: function(workout){
        return workout.exercises;
    }
});

Template.exercise.events({
    'submit #newExercise': function(e,t){
        var workout = this.exercises;
        var name = e.target.name;
        var duration = parseInt(e.target.duration);
        workout.push('exercises', {
            name: name,
            duration: duration
        });
        Meteor.call('saveDoc', workout);
    },
    'click .playWorkout': function(e,t){
        
    }
});