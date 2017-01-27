(function() {
    'use strict';

    angular
        .module('rappi')
        .controller('carController', carController);

    carController.$inject = ['rappiShoppingService', '$state'];

    /* @ngInject */
    function carController(rappiShoppingService, $state) {
        var vm = this;

        vm.init = init;
        vm.getElements = getElements;
        vm.deleteElement = deleteElement;
        vm.buy = buy;
        vm.total = 0;

        function init(){
          vm.getElements();
        }

        function getElements(){
          vm.carList = rappiShoppingService.getElements();
          angular.forEach(vm.carList, function(item) {
            vm.total += parseFloat(item.price);
        });
      }

      function deleteElement(id){
        var post = rappiShoppingService.deleteElement(id);
        vm.total = 0;
        if(post){
          vm.carList = post;
          angular.forEach(vm.carList, function(item) {
            vm.total += parseFloat(item.price);
          });
          Materialize.toast("Deleted", 2000);
        }
      }

        function buy(){
          var post = rappiShoppingService.setLocalStorage();
          if(post == 0){
            Materialize.toast("Buy Success", 3000);
            $state.go('home');
          }

        }

        vm.init();
    }
})();
