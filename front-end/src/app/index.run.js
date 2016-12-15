(function() {
  'use strict';

  angular
    .module('myMessageFront')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
