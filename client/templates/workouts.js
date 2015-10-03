Template.workouts.helpers({
    workouts: function(){
        return Workouts.find({});
    },
    link: function(workoutId){
        return FlowRouter.path('Exercises', {workoutId: workoutId});
    }
});

Template.workouts.events({
    'submit #newWorkout': function(e,t){
        var name = e.target.name;
        var owner = Meteor.userId();
        Meteor.call('newWorkout', name, owner);
    }
});