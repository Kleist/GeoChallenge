console.log('main defined');
require.config({
  baseUrl: 'js',
  paths: {
    'domReady': '../lib/requirejs-domready/domReady',
    'angular': '../lib/angular/angular.min',
    'uiRouter': '../lib/angular-ui-router/release/angular-ui-router.min',
    'satellizer': '../lib/satellizer/satellizer.min',
  },
  shim: {
    'angular': {
      exports: 'angular'
    },
    'uiRouter': {
      deps: ['angular'],
    },
    'satellizer': {
      deps: ['angular'],
    }
  },
  deps: ['bootstrap'],
});
