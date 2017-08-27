angular
.module('adminApp', ['ui.router'])
.run(() => console.log('Hello from module'))
.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.when('', '/')
  var states = [
    {
      name: 'dashboard',
      url: '/',
      template: '<dashboard></dashboard>'
    },
    {
      name: 'administration',
      url: '/administration',
      template: '<administration></administration>'
    },
    {
      name: 'configuration',
      url: '/configuration',
      template: '<configuration></configuration>'
    }
  ]
  states.forEach(function (state) {
    $stateProvider.state(state)
  })
})
