//client/views/home.js
Template.login.rendered = function() {
};

Template.login.created = function() {
};

Template.login.destroyed = function() {
};

Template.login.events({
  'submit form' : function(event) {
    event.preventDefault();
    var email = event.target.loginEmail.value;
    var password = event.target.loginPassword.value;
    // Meteor.loginWithPassword(email, password, function() {
    //   Router.go('/dashboard');
    // });
  }
});
