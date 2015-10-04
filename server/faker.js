// Meteor.startup(function(){
  // console.log(Meteor.users.find().count());
  // if(Meteor.users.find().count() < 1) {
  //     var randomName = faker.name.firstName();
  //     var userName = faker.internet.userName();
  //     Accounts.createUser({
  //       username: userName,
  //       profile: {
  //         name: randomName,
  //       },
  //       email: 'fake@mailinator.com',
  //       password: 'password'
  //     });
  //   }
// console.log(Workouts.find().count());
//   if (Workouts.find().count() < 10) {
//     _.each(_.range(10), function() {
//       var randomName = faker.name.jobDescriptor();
//       var owner = Meteor.users.findOne()._id;
//       var exercises = [];
//       _.each(_.range(10), function(i) {
//         var exName = faker.name.findName();
//         var exDur = faker.random.number({'min': 5,'max': 15});
//         exercises[i] = {
//           _id: new Meteor.Collection.ObjectID()._str,
//           name: exName,
//           duration: exDur,
//           order: i
//         };
//       });
//       var workout = new Workout({
//         name: randomName,
//         owner: owner,
//         exercises: exercises
//       });
//       workout.save();
//     });
//   }
//
//   if(Sess.find().count() < 5) {
//     var workout = Workouts.findOne();
//     _.each(_.range(5), function() {
//       var exercises = [];
//       workout.exercises.forEach(function(exercise, i){
//         var data = [];
//         var fakeDate = new Date(faker.date.past());
//         _.each(_.range(5), function(j){
//           fakeDate = new Date(fakeDate.setSeconds(fakeDate.getSeconds() + j));
//           data[j] = {
//             hr: faker.random.number({'min': 40, 'max': 200}),
//             timeStamp: new Date(fakeDate)
//           }
//         });
//         exercises[i] = {
//           ex_id: exercise._id,
//           data: data
//         }
//       });
//       // console.log(exercises);
//       var session = new Sess({
//         workout: workout._id,
//         exercises: exercises
//       });
//       session.save();
//     });
//   }
// });
