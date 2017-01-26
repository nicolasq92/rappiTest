(function() {
    'use strict';

    angular
        .module('rappi')
        .service('rappiShoppingService', rappiShoppingService);

    rappiShoppingService.$inject = ["$localStorage"];

    /* @ngInject */
    function rappiShoppingService($localStorage) {
        this.getElements = functionGetElements;
        this.postElements = functionPostElements;
        this.setLocalStorage = setLocalStorage;
        this.deleteElement = deleteElement;

        function setLocalStorage(){
          $localStorage.products = [];
          return 0;
        }

        function functionGetElements() {
          return $localStorage.products;
        }

        function functionPostElements(article) {
          var arrayResult = [];

          if($localStorage.products == undefined || $localStorage.products == "" || $localStorage.products == []){
            arrayResult = [];
          }else{
            arrayResult = $localStorage.products;
          }
          
          arrayResult.push(article);
          $localStorage.products = arrayResult;
          $localStorage.quantity += 1;

          return 0;
        }

        function deleteElement(id){
          var arrayResult = $localStorage.products;
          arrayResult.splice(id,1);
          $localStorage.products = arrayResult;
          return arrayResult;
        }
    };
})();
