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
    //Get values of title and description
    var titleValue = template.find('#title').value;
    var descriptionValue = template.find('#description').value;
    // save #title and #description to task
    Tasks.insert({
      title: titleValue,
      description: descriptionValue
    });

    event.preventDefault();
    //redirect user to dashboard
    Router.go('/dashboard');
  }
});


//Logout button should take user back to login page