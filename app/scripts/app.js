angular.module('rappi', ['ui.router', 'cmFilter', 'orderByPriceFilter', 'ngStorage', 'ui.materialize'])

.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider

  .state('home', {
    url:'/',
    templateUrl:'views/home.html',
    controller: 'homeController',
    controllerAs: 'vm'
  })
  .state('shoppingCar', {
    url: '/shoppingCar',
    templateUrl:'views/shoppingcar.html',
    controller: 'carController',
    controllerAs: 'vm'
  })
})

.constant('CONFIG', {
  defaultEndPoint:'assets/json/rappi.json'
});
