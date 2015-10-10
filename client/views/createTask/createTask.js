//client/views/home.js
Template.createTask.rendered = function() {
};

Template.createTask.created = function() {
};

Template.createTask.destroyed = function() {
};
// onclick for CreateTask
// Should save information from form and put that into Task container
Template.createTask.events({
  'click #create' : function(event, template) {
     event.preventDefault();
    //Get values of title and description
    var titleValue = template.find('#title').value;
    var descriptionValue = template.find('#description').value;
    // save #title and #description to task
    Tasks.insert({
      title: titleValue,
      description: descriptionValue,
      // default status 1 ( to-do )
      status : 1
    });
    console.log('banana');
    Router.go('/');
  }
});

//Logout button should take user back to login page

Template.createTask.events({
  'click #logout' : function(event) {
    event.preventDefault();
    Router.go('/')
  }
});