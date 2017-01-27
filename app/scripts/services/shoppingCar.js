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
        this.numbersOfElements = numbersOfElements;


        function setLocalStorage(){
          $localStorage.products = [];
          numbersOfElements();
          return 0;
        }

        function functionGetElements() {
          numbersOfElements();
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
          numbersOfElements();

          return 0;
        }

        function numbersOfElements(){

          var arrayResult = $localStorage.products;

          if (arrayResult == "" || arrayResult == [] || arrayResult == undefined) {
            return 0;
          }

        return arrayResult.length;
        }

        function deleteElement(id){
          var arrayResult = $localStorage.products;
          arrayResult.splice(id,1);
          $localStorage.products = arrayResult;
          numbersOfElements();
          return arrayResult;
        }
    };
})();
