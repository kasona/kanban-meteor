//Link router.js to Application Layout
Router.configure({
  layoutTemplate : 'ApplicationLayout'
});

// ============= Home Page ================
Router.route('/', function () {
  this.render('dashboard', {
  });
});

// ============ Dashboard ================
// Router.route('/dashboard', function() {
//   this.render('dashboard');
// });

// ============ Register =================
Router.route('/register', function() {
  this.render('register');
});

// ============ /profile/edit ============
Router.route('/profile/edit', function() {
  this.render('editProfile');
});

// =========== tasks/new =================
Router.route('/tasks/new', function() {
  this.render('createTask');
});
