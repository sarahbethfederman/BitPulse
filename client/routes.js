FlowRouter.route('/', {
  action: function() {
    BlazeLayout.render("masterLayout", {content: "sessions"});
  }
});
