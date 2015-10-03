FlowRouter.route('/', {
    name: 'Workouts',
    action: function () {
        BlazeLayout.render("masterLayout", {content: "workouts"});
    }
});

FlowRouter.route('/workouts/:workoutId',{
    name: 'Exercises',
    action: function(){
        BlazeLayout.render('masterLayout', {content: 'exercise'});
    }
});

FlowRouter.route('/sessions', {
    name: 'Sessions',
    action: function(){
        BlazeLayout.render('masterLayout', 'sessions');
    }
});

FlowRouter.route('/sessions/:sessionId', {
    name: 'SingleSession',
    action: function () {
        BlazeLayout.render('masterLayout', {content: 'session'});
    }
});