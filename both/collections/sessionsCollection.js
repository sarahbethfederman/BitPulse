Sess = new Mongo.Collection('sessions');

Sess = Astro.Class({
    name: 'Sess',
    collection: Sess,
    fields: {
        workout: 'string',
        // exercises: {
        //     type: 'array',
        //     default: function(){
        //         return [];
        //     }
        // },
        'exercises.$.ex_id': 'string',
        'exercises.$.data.$.hr': 'number',
        'exercises.$.data.$.timeStamp': 'date'
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
