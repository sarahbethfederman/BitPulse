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
