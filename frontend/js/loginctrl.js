define(["app"], function (app) {
  'use strict';
  console.log('loginctrl.js loaded');
    
  app.controller('LoginCtrl', function($scope, $http) {
    var loggedIn = false;
    $http.get('/loggedin').success(function(userStr) {
      var user = JSON.parse(userStr);
      console.log('/loggedin => ' + user);
      if (user) {
        loggedIn = true;
      }
      else {
        loggedIn = false;        
      }
    });
    
    $scope.password = "";
    $scope.username = "";
    
    $scope.login = function() {
      console.log('login clicked');
      $http.post('/login', {username: $scope.username, password: $scope.password})
      .success(function(data) {
        console.log('logged in => ',data);
        loggedIn = true;
      })
      .error(function(data) {
        console.log('login failed => ', data);
        loggedIn = false;
      });
    };
    
    $scope.logout = function() {
      console.log('logout clicked');
      $http.post('/logout').success(function(data) {
        console.log('/logout => ', data);
        loggedIn = false;
      });
    };
    
    $scope.isAuthenticated = function() {
      return loggedIn;
    };
  });
});