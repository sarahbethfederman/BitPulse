Workouts = new Mongo.Collection('workouts');

Workout = Astro.Class({
  name: 'Workouts',
  collection: Workouts,
  fields: {
    name: 'string',
    owner: 'string',
    exercises: {
      type: 'array',
      default: function() {
        return [];
      },
      'exercises.$._id': 'string',
      'exercises.$.name': 'string',
      'exercises.$.duration': 'number',
      'exercises.$.description': 'string',
      'exercises.$.order': 'number'
        //'exercises.$.reps': 'number'
    }
  },
  events: {
    beforeSave: function(e) {

    }
  },
  methods: {
    thisUser: function() {
      return Meteor.users.find({
        _id: this.owner
      });
    }
  }
});

//Workouts.insert({somefield: 'some value'});
//Workouts.insert({someotherfield: 'some value'});
