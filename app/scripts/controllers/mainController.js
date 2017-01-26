(function() {
    'use strict';

    angular
        .module('rappi')
        .controller('mainController', mainController);

    mainController.$inject = ['defineUrl'];

    /* @ngInject */
    function mainController(defineUrl) {
        var vm = this;
        vm.asignarUrl = asignarUrl;

        function asignarUrl(url){
          defineUrl.setData(url);
        }


      }
})();
