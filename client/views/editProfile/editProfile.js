//client/views/home.js
Template.editProfile.rendered = function() {
};

Template.editProfile.created = function() {
};

Template.editProfile.destroyed = function() {
};

// Logout button
Template.editProfile.events({
  'click #userProfile' : function(event, template) {
    event.preventDefault();
    Router.go('/');
  }
});
