define(["angular", "uiRouter", 'satellizer'], function (angular) {
  console.log('app defined');
  function MainCtrl() {
    this.value = 0;
  }
  var app = angular.module('app', ['ui.router', 'satellizer']);

  app.controller('MainCtrl', function () {
    return MainCtrl;
  });

  app.config(function ($authProvider) {
    $authProvider.facebook({
      clientId: '484226408392517'
    });
  });
  
  app.controller('LoginCtrl', function($scope, $auth) {
    $scope.authenticate = function(provider) {
      $auth.authenticate(provider);
    };
    
    $scope.logout = function() {
      $auth.logout();
    };
    
    $scope.isAuthenticated = function() {
      return $auth.isAuthenticated();
    };
  });

  return app;
});
