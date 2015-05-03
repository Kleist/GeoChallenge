require.config({
  baseUrl: 'js',
  paths: {
    'domReady': '../lib/requirejs-domready/domReady',
    'angular': '../lib/angular/angular.min',
    'ui.router': '../lib/angular-ui-router/release/angular-ui-router.min',
    'satellizer': '../lib/satellizer/satellizer.min',
    'ui.bootstrap': '../lib/angular-bootstrap/ui-bootstrap.min',
  },
  shim: {
    'angular': {
      exports: 'angular'
    },
    'ui.router': {
      deps: ['angular'],
    },
    'ui.bootstrap': {
      deps: ['angular'],
    },
    'satellizer': {
      deps: ['angular'],
    }
  },
  deps: ['bootstrap'],
});
