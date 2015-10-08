//client/views/home.js
Template.login.rendered = function() {
};

Template.login.created = function() {
};

Template.login.destroyed = function() {
};

// Logout button
Template.editProfile.events({
  'click #userProfile' : function(event, template) {
    event.preventDefault();
    Router.go('/login');
  }
});
