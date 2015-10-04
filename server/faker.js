Meteor.startup(function(){
  // console.log(Meteor.users.find().count());
  if(Meteor.users.find().count() < 1) {
      var randomName = faker.name.firstName();
      var userName = faker.internet.userName();
      Accounts.createUser({
        username: userName,
        profile: {
          name: randomName,
        },
        email: 'fake@mailinator.com',
        password: 'password'
      });
    }
// console.log(Workouts.find().count());
  if (Workouts.find().count() < 10) {
    _.each(_.range(10), function() {
      var randomName = faker.name.jobDescriptor();
      var owner = Meteor.users.findOne()._id;
      var exercises = [];
      _.each(_.range(10), function(i) {
        var exName = faker.name.findName();
        var exDur = faker.random.number({'min': 30,'max': 250});
        exercises[i] = {
          _id: new Meteor.Collection.ObjectID()._str,
          name: exName,
          duration: exDur,
          order: i
        };
      });
      var workout = new Workout({
        name: randomName,
        owner: owner,
        exercises: exercises
      });
      workout.save();
    });
  }
});
