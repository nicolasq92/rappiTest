(function() {
    'use strict';

    angular
        .module('rappi')
        .controller('homeController', Controller);


    Controller.$inject = ['$scope', 'rappiService', 'rappiShoppingService', 'defineUrl', 'CONFIG'];

    /* @ngInject */
    function Controller($scope, rappiService, rappiShoppingService, defineUrl, CONFIG) {
        var vm = this;

        vm.init = init;
        vm.getData = getData;
        vm.showFilters = showFilters;
        vm.options = options;
        vm.buscar = buscar;
        vm.functOrderName = functOrderName;
        vm.addToCard = addToCard;
        vm.orderPrice = orderPrice;
        vm.reverse = false;
        vm.orderName = 'name';

        $scope.url = defineUrl;

        $scope.$watch('url.getData()', function(current, original, scope){
          vm.url = current;
          vm.getData();
        }, true);


        function init(){
          vm.getData();
        };

        function getData() {

          if (vm.url == "" || vm.url == undefined){
            var url = CONFIG.defaultEndPoint;
          } else{
            var url = vm.url;
          }

          rappiService.getElements(url).then(function(response){
            vm.categories = response.data.categories;
            vm.products = response.data.products;
          },function(err){
            return -1;
          });
        };

        function showFilters(){
          vm.show = vm.show ? false: true;
        };

        function buscar(){
          vm.option = 'name';
          vm.value = vm.buscador;
        }

        function functOrderName(){
          vm.orderName = (vm.orderName == 'name') ? '-name':'name';
        }

        function options(opt, reverse){
          if(opt == 'orderByPrice'){
            vm.reverse = vm.reverse ? false : true;
            vm.option = vm.orderName;
            vm.orderName = null;
          }else{
            vm.option = opt;
            vm.reverse = null;
          }

        }

        function orderPrice(opt){
          vm.reverse = vm.reverse ? false : true;
          vm.orderName = "";
          vm.order = opt;
        }

        function addToCard(article){
          var post = rappiShoppingService.postElements(article);
          if(post == 0){
            Materialize.toast("Added to Cart", 1000);
          }
        };

        vm.init()
    }
})();
