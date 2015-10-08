//client/views/home.js
Template.login.rendered = function() {
};

Template.login.created = function() {
};

Template.login.destroyed = function() {
};

Template.dashboard.events({
  'click #addNew' : function(event, template) {
    event.preventDefault();
    Router.go('/tasks/new');
  }
});
