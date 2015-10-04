Workouts = new Mongo.Collection('workouts');

Workout = Astro.Class({
    name: 'Workouts',
    collection: Workouts,
    fields: {
        name: 'string',
        owner: 'string',
        exercises: {
            type: 'array',
            default: function(){
                return [];
            },
            'exercises.$.name': 'string',
            'excercises.$.duration': 'number'
            //'exercises.$.reps': 'number'
        }
    },
    events: {
    },
    methods: {
        thisUser: function(){
            return Meteor.users.find({_id: this.owner});
        }
    }
});

//Workouts.insert({somefield: 'some value'});
//Workouts.insert({someotherfield: 'some value'});