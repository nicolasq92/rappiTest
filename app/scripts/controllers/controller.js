(function() {
    'use strict';

    angular
        .module('rappi')
        .controller('homeController', Controller);


    Controller.$inject = ['$scope', 'CONFIG'];

    /* @ngInject */
    function Controller($scope, CONFIG) {
        var vm = this;

        vm.init = init;


        function init(){
          alert("Hola");
        };



        vm.init()
    }
})();
