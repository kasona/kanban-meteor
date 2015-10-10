//client/views/home.js
Template.editProfile.rendered = function() {
};

Template.editProfile.created = function() {
};

Template.editProfile.destroyed = function() {
};

// Logout button
// Template.editProfile.events({
//   'click #userProfile' : function(event, template) {
//     event.preventDefault();
//     Router.go('/');
//   }
// });

Template.editProfile.events({
    'click #submit' : function(event, template) {
      event.preventDefault();
      //Get values of title and description
      var usernameValue = template.find('#username').value;
      // var changeEmailValue = template.find('#changeEmail').value;
     // Accounts.setUsername(Meteor.userId(), usernameValue);
     Meteor.users.update(Meteor.user()._id, {$set: {username : usernameValue}});
    Router.go('/dashboard');
    // console.log('pears', usernameValue);
    // console.log('banana', Meteor.userId());
  }
});

