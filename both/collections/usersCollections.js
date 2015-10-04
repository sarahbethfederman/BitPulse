User = Astro.Class({
  name: 'User',
  collection: Meteor.users,
  fields: {
    emails: 'array',
    username: 'string',
    password: 'string',
    services: 'object',
    createdAt: 'date',
    profile: {
      type: 'object',
      default: function(){return {};}
    },
    'profile.name':'string'
  }
});
