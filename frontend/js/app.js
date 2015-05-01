define(["angular"], function(angular) {
  console.log(angular);
  function MainCtrl() {
    this.value = 0;
  }
  var app = angular.module('app', []);
  
  app.controller('Main', function () {
    return MainCtrl;
  });
  
  return app;
});
