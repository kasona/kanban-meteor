//client/views/home.js
Template.home.rendered = function() {
};

Template.home.created = function() {
};

Template.home.destroyed = function() {
};

// =========== Sign up =========================
/*
Should add the username and password to the users database
send the user to the dashboard?
or make them sign in again? MUWAHAHAHEHEUEHUHEUEUHE ???
*/
Template.signup.events({
    'click #submit' : function(event, template) {
      event.preventDefault();
      //Get values of title and description
      var usernameValue = template.find('#username').value;
      var passwordValue = template.find('#password').value;
  Accounts.createUser({
      username : usernameValue,
      password : passwordValue
  });
     Router.go('/dashboard');
  }
});
