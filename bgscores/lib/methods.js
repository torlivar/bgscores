Meteor.methods({
  scores: function(who) {
    check(who, String);

    return Matches.find({winner:who}).count();
  }
});
