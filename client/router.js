//Link router.js to Application Layout
Router.configure({
  layoutTemplate : 'ApplicationLayout'
});

// ============= Home Page ================
Router.route('/', function () {
  this.render('login', {
  });
});

// ============ Dashboard ================
Router.route('/dashboard', function() {
  this.render('dashboard');
});

// ============ /profile/edit ============
Router.route('/prfile/edit', function() {
  this.render('editProfile');
});


// ===========tasks/new =================
Router.route('/tasks/new', function() {
  this.render('newTask');
});