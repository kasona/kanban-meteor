//client/views/home.js
Template.login.rendered = function() {
};

Template.login.created = function() {
};

Template.login.destroyed = function() {
};

Template.login.events({
  'click #login-button' : function(event, template) {
    event.preventDefault();
    Router.go('/dashboard');
  }
});
