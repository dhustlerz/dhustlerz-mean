(function() {
  'use strict';

  angular
    .module('myMessageFront')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec, toastr, $scope, $http) {

    var vm = this;
    vm.messages = {};
    // vm.awesomeThings = [];
    // vm.classAnimation = '';
    // vm.creationDate = 1481817960718;
    // vm.showToastr = showToastr;

    // activate();

    // function activate() {
    //   getWebDevTec();
    //   $timeout(function() {
    //     vm.classAnimation = 'rubberBand';
    //   }, 4000);
    // }

    // function showToastr() {
    //   toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
    //   vm.classAnimation = '';
    // }

    // function getWebDevTec() {
    //   vm.awesomeThings = webDevTec.getTec();

    //   angular.forEach(vm.awesomeThings, function(awesomeThing) {
    //     awesomeThing.rank = Math.random();
    //   });
    // }
     function postMessages(myMsg) {
      if(!jQuery.isEmptyObject(myMsg)) {
        $http.post('http://localhost:5000/api/message', {msg: myMsg});
      }
    }

    function getMessage() {
      $http.get('http://localhost:5000/api/message').then(function(result) {
        $vm.messages = result.data;
      });
    }
    $scope.getMessage();

  }
})();

// export class MainController {
//   constrtuctor ($http) {
//     'ngInject';

//   }

//   postMessage() {
//     alert('working');
//   }
// }