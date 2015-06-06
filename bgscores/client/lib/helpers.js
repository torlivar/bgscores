Template.summary.helpers({
  homescore: function() {return Meteor.call("scores", "H"); },
  awayscore: function() {return Meteor.call("scores", "A"); }
})
