Template.mainMenu.helpers({
  rightLink: function() {
    var url = FlowRouter.getRouteName();
    if (url === 'CreateWorkout') {
      return {
        'url': FlowRouter.path('Workouts'),
        'text': 'Save'
      }
    } else {
      return {
        'url': '/logout',
        'text': 'Logout'
      }
    }
  },
  leftLink: function() {
    var url = FlowRouter.getRouteName();
    if (url === 'Workouts') {
      return {
        'url': FlowRouter.path('Sessions'),
        'text': 'History'
      }
    } else {
      return {
        'url': FlowRouter.path('Workouts'),
        'text': 'Back'
      }
    }
  }
});
