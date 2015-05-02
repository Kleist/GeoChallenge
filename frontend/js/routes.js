define(['app', "uiRouter"], function (app) {
  'use strict';
  return app.config(function ($stateProvider, $urlRouterProvider) {
    console.log('routes defined');
    $urlRouterProvider.otherwise('/login');
    $stateProvider.state('state1', {
      url: '/state1',
      templateUrl: 'main.html',
      controller: function ($scope) {
        $scope.state = "state is 1";
      }
    })
    .state('state2', {
      url: '/state2',
      templateUrl: 'main.html',
      controller: function ($scope) {
        $scope.state = "state is 2";
      }
    })
    .state('login', {
      url: '/login',
      templateUrl: 'login.html',
      controller: 'LoginCtrl'
    });
  });
});
