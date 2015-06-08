Meteor.publish("matches", function() {
  return Matches.find({"home":"arne","away":"torlivar"});
})

Meteor.publish("games", function() {
  return Games.find({"home":"arne","away":"torlivar"});
})
