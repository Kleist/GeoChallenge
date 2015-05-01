require.config({
  baseUrl: 'js',
  paths: {
    domReady: '../lib/requirejs-domready/domReady',
    angular: '../lib/angular/angular.min',
  },
  shim: {
    angular: {
      exports: 'angular'
    }
  },
  deps: ['bootstrap'],
});
