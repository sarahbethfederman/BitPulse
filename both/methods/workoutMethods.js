Meteor.methods({
    newWorkout: function(name, userId){
        var workout = new Workout({name: name, owner: userId});
        Meteor.call('saveDoc', workout);
    }
})