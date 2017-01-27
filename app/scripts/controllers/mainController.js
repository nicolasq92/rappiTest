(function() {
    'use strict';

    angular
        .module('rappi')
        .controller('mainController', mainController);

    mainController.$inject = ['$scope', 'defineUrl', 'rappiShoppingService'];

    /* @ngInject */
    function mainController($scope, defineUrl, rappiShoppingService) {
        var vm = this;
        vm.asignarUrl = asignarUrl;
        vm.elements = rappiShoppingService.numbersOfElements;

        $scope.$watch(vm.elements, function(newValue, oldValue, scope){
            vm.quantityOfElements = newValue;
        }, true);


        function asignarUrl(url){
          defineUrl.setData(url);
        }


      }
})();
