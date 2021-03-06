FlowRouter.route('/', {
  name: 'main',
  action(){
    BlazeLayout.render('layout', {child: 'main'});
  }
});

FlowRouter.route('/users', {
  name: 'users',
  action(){
    BlazeLayout.render('layout', {child: 'users'});
  }
});

FlowRouter.route('/plan', {
  name: 'plan',
  action(){
    BlazeLayout.render('layout', {child: 'plan'});
  }
});

FlowRouter.route('/map', {
  name: 'map',
  action(){
    BlazeLayout.render('layout', {child: 'map'})
  }
})
