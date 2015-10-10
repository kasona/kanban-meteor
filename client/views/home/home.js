 //client/views/home.js
Template.home.rendered = function() {
};

Template.home.created = function() {
};

Template.home.destroyed = function() {
};

// ========= Check Login information ===============
Template.home.events({
    'submit form' : function(event, template) {
      event.preventDefault();
      //Get values of title and description
      var usernameValue = template.find('#username').value;
      var passwordValue = template.find('#password').value;
        console.log('pear', 'apples', usernameValue);
        console.log('banana', passwordValue);
      Meteor.loginWithPassword(usernameValue, passwordValue, function(err){
      if (err){
        console.log('err', err);
      } else {
      Router.go('/dashboard');
      }
      });
  }
});

// ======== Route to Signup Page ==================
Template.home.events({
  'click #signup' : function(event) {
    event.preventDefault();
    Router.go('/signup');
  }
})
