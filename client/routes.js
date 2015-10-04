// loggedIn = FlowRouter.group({
//   triggersEnter: [
//     function() {
//       var route;
//       if (!(Meteor.loggingIn() || Meteor.userId())) {
//         route = FlowRouter.current();
//         if (route.route.name !== 'login') {
//           Session.set('redirectAfterLogin', route.path);
//         }
//         return FlowRouter.go(‘login’);
//       }
//     }
//   ]
// });
// })

FlowRouter.route('/', {
    name: 'Workouts',
    action: function () {
        BlazeLayout.render("masterLayout", {content: "workouts"});
    }
});

FlowRouter.route('/workouts/create',{
    name: 'CreateWorkout',
    action: function(){
        BlazeLayout.render('masterLayout', {content: 'createWorkout'});
    }
});

FlowRouter.route('/workouts/:workoutId/:sessionId?',{
    name: 'Exercises',
    action: function(){
        BlazeLayout.render('masterLayout', {content: 'exercise'});
    }
});

FlowRouter.route('/sessions', {
    name: 'Sessions',
    action: function(){
        BlazeLayout.render('masterLayout', {content: 'sessions'});
    }
});

FlowRouter.route('/sessions/:sessionId', {
    name: 'SingleSession',
    action: function () {
        BlazeLayout.render('masterLayout', {content: 'summary'});
    }
});

FlowRouter.route('/logout',{
  name: 'Logout',
  action: function(){
    Meteor.logout();
  }
})
