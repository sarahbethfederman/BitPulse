Template.sessions.helpers({
    session: function(){
      return Sess.find({});
    },
    workout: function(){
      var workoutId = FlowRouter.getParam('workoutId');
      Workouts.findOne({
        _id: workoutId
      })
    }
});

Template.sessions.events({

});
