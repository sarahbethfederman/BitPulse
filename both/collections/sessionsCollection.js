Sess = new Mongo.Collection('sessions');

Sess = Astro.Class({
  name: 'Sess',
  collection: Sess,
  fields: {
    workout: 'string',
    'exercises.$.ex_id': 'string',
    'exercises.$.data.$.hr': 'number',
    'exercises.$.data.$.timeStamp': 'date'
  },
  events: {

  },
  methods: {
    thisUser: function() {
      return Meteor.users.find({
        _id: this.owner
      });
    },
    averageHeartrate: function() {
      var elmt = _.pluck(_.flatten(_.pluck(this.exercises, 'data')),'hr');
      var sum = 0;
      for (var i = 0; i < elmt.length; i++) {
        sum += parseInt(elmt[i], 10); //don't forget to add the base
      }
      console.log(elmt);
      return sum/elmt.length;
    },
    workoutObj: function(){
      return Workouts.findOne({_id: this.workout});
    },
    exerciseName: function(ex_id){
      var workout = Workouts.findOne({_id: this.workout});
      return _.findWhere(workout.exercises, {_id: ex_id}).name;
    },
    exerciseDuration: function(ex_id){
      var workout = Workouts.findOne({_id: this.workout});
      return _.findWhere(workout.exercises, {_id: ex_id}).duration;
    },
    exerciseHeartrate: function(ex_id){
      var elmts = _.pluck(_.flatten(_.pluck(_.findWhere(this.exercises, {ex_id: ex_id}), 'data')),'hr');
      var elmt = elmts.filter(function(item) {
        if (item) {
          return item;
        }
      });
      var sum = 0;
      for (var i = 0; i < elmt.length; i++) {
        sum += parseInt(elmt[i], 10); //don't forget to add the base
      }
      return sum/elmt.length;
    }
  }
});

//Workouts.insert({somefield: 'some value'});
//Workouts.insert({someotherfield: 'some value'});
