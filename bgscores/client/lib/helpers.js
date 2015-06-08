Template.summary.helpers({
  homescore: function() {return Matches.find({winner:"H"}).count(); },
  awayscore: function() {return Matches.find({winner:"A"}).count(); }
})
