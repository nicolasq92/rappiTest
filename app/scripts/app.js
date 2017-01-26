angular.module('rappi', ['ui.router', 'ngStorage', 'ui.materialize'])

.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider

  .state('home', {
    url:'/',
    templateUrl:'views/home.html',
    controller: 'homeController',
    controllerAs: 'vm'
  })

.constant('CONFIG', {
  defaultEndPoint:'assets/json/data.json'
});
