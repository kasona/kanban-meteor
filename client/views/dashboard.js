//client/views/home.js
Template.login.rendered = function() {
};

Template.login.created = function() {
};

Template.login.destroyed = function() {
};

// 'Add a new task' button route
Template.dashboard.events({
  'click #addNew' : function(event, template) {
    event.preventDefault();
    Router.go('/tasks/new');
  }
});

// Username link router
Template.dashboard.events({
  'click #userProfile' : function(event, template) {
    event.preventDefault();
    Router.go('/profile/edit');
  }
});

Template.dashboard.helpers({
  allTasks : function(){
    return Tasks.find();
  }
});