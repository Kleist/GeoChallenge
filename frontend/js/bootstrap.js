define(['angular', 'domReady', 'app', 'routes'], function(ng, domReady) {
  'use strict';
  console.log('bootstrap.js loaded');
  domReady(function(document) {
    ng.bootstrap(document, ['app']);
  });
});
