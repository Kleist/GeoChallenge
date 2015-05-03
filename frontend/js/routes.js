define(['app', "./profilectrl", './loginctrl', "uiRouter"], function (app, ProfileCtrl, LoginCtrl) {
  'use strict';
  
  return app.config(function ($stateProvider, $urlRouterProvider) {
    console.log('routes defined');
    $urlRouterProvider.otherwise('/login');
    $stateProvider.state('profile', {
      url: '/profile',
      templateUrl: 'profile.html',
      controllerAs: 'vm',
      controller: ProfileCtrl
    }).state('login', {
      url: '/login',
      templateUrl: 'login.html',
      controller: LoginCtrl,
    }).state('about', {
      url: '/about',
      templateUrl: 'about.html'
    });
  });
});
