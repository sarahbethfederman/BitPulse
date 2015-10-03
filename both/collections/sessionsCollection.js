Sessions = new Mongo.Collection('sessions');

Session = Astro.Class({
    name: 'Sessions',
    collection: Sessions,
    fields: {
        workout: 'string',
        exercises: {
            type: 'object',
            default: function(){
                return {};
            }
        },
        'exercises.$.name': 'string',
        'excercises.$.duration': 'number',
        'exercises.$.heartrate': 'number'
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