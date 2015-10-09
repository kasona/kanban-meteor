Tasks = new Meteor.Collection('Tasks');

Meteor.users.allow({
  update: function (usersId, user, fields, modifier) {
    return true;
    // if(user._id === userId)
    // {
    //   Meteor.users.update({_id : userID,}, modifier);
    //   return true;
    // }
    // else return true;
  }
});