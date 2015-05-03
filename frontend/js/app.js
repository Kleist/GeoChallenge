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

  return app;
});
