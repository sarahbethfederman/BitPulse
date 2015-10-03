Template.exercise.helpers({
    workout: function(){
        //put route info here
        return Workouts.find({});
    },
    exercises: function(workout){
        return workout.exercises;
    }
});

Template.exercise.events({

});