Template.summary.helpers({
  session: function() {
    var sessId = FlowRouter.getParam('sessionId');
    return Sess.findOne({
      _id: sessId
    });
  }
});
