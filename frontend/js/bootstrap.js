define(['require', 'angular', 'domReady', 'app'], function(require, ng, domReady) {
  'use strict';
  domReady(function(document) {
    ng.bootstrap(document, ['app']);
  });
});
