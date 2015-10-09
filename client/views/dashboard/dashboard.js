//client/views/home.js
Template.dashboard.rendered = function() {
};

Template.dashboard.created = function() {
};

Template.dashboard.destroyed = function() {
};

// ===== 'Add a new task' button route ========
Template.dashboard.events({
  'click #addNew' : function(event, template) {
    event.preventDefault();
    Router.go('/tasks/new');
  }
});

// ============ Username link router ==========
Template.dashboard.events({
  'click #userProfile' : function(event, template) {
    event.preventDefault();
    Router.go('/profile/edit');
  }
});

// ================ Left Button=================
Template.dashboard.events({
  'click #left' : function(event, template) {
    Tasks.update(this._id, {$inc: {status: -1}});
  }
});

// ============== Right Button =================
Template.dashboard.events({
  'click #right' : function(event, template) {
    Tasks.update(this._id, {$inc: {status: 1}});
  }
});

Template.dashboard.helpers({
  'allToDoItems' : function(){
    return Tasks.find({ status : 1 });
  },
  'allInProgress' : function(){
    return Tasks.find({ status : 2 });
  },
  'allDone' : function(){
    return Tasks.find({ status : 3 });
  }
});

// Template.dashboard.events({
//   'click #remove' : function(event, template) {
//     DESTROY ME
//     event.preventDefault();
//   }
// });

// ================ Logout =================
Template.dashboard.events({
    'click .logout': function(event){
        event.preventDefault();
        Meteor.logout();
        Router.go('/');
    }
});