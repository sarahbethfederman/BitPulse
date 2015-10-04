Meteor.methods({
    saveDocs: function(doc){
        doc.save();
    }
})