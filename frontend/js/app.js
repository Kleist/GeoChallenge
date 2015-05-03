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

  app.controller('LoginCtrl', function ($scope, $auth, $http) {
    $scope.myInfo = {};
    $scope.authenticate = function (provider) {
      $auth.authenticate(provider).then(function () {
        $http.get('/api/me').success(function (data) {
          console.log('/api/me success', data);
        })
          .error(function (data) {
          console.log('/api/me error: ', data);
        });
        console.log({
          content: 'You have successfully logged in',
          animation: 'fadeZoomFadeDown',
          type: 'material',
          duration: 3
        });
      }).catch(function (response) {
        console.log({
          content: response.data ? response.data.message : response,
          animation: 'fadeZoomFadeDown',
          type: 'material',
          duration: 3
        });
      });
    };

    $scope.logout = function () {
      $auth.logout();
    };

    $scope.isAuthenticated = function () {
      return $auth.isAuthenticated();
    };
  });

  return app;
});
