//Link router.js to Application Layout
Router.configure({
  layoutTemplate : 'ApplicationLayout'
});

// ============= Home Page ================
Router.route('/', function () {
  this.render('home', {
  });
});

// ============ Sign Up =================
Router.route('/signup', function() {
  this.render('signup');
});

// ============ Dashboard ================
Router.route('/dashboard', function() {
  this.render('dashboard');
});

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
