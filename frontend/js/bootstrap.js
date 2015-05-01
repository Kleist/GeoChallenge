define(['angular', 'domReady', 'app', 'routes'], function(ng, domReady) {
  console.log('bootstrap defined');
    'use strict';
  domReady(function(document) {
    console.log('domReady');
    ng.bootstrap(document, ['app']);
  });
});
