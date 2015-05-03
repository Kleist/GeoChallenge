define(['app', "ui.router", './loginctrl'], function (app) {
  'use strict';
  console.log('routes.js loaded');
  
  return app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/login');
    $stateProvider.state('login', {
      url: '/login',
      templateUrl: 'login.html',
      controller: 'LoginCtrl'
    });
  });
});
