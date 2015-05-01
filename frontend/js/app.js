define(["angular", "uiRouter"], function(angular) {
  console.log('app defined');
  function MainCtrl() {
    this.value = 0;
  }
  var app = angular.module('app', ["ui.router"]);
  
  app.controller('MainCtrl', function () {
    return MainCtrl;
  });
  
  return app;
});
