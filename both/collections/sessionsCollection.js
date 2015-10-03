Sessions = new Mongo.Collection('sessions');

Session = Astro.Class({
    name: 'Sessions',
    collection: Sessions,
    fields: {
        workout: 'string',

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