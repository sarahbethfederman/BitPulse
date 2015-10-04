Template.mainMenu.helpers({
  rightLink: function() {
    var url = FlowRouter.getRouteName();
    return {
      'url': 'derp',
      'text': 'Logout'
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
