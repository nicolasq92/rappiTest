(function () {
    'use strict';

    angular
    .module('orderByPriceFilter', [])

    .filter('orderFilter', function() {
      return function(items, condition, reverse) {
        var filteredByPrice = [];


        angular.forEach(items, function(item) {
              filteredByPrice.push(item);
        });

        if (condition == "orderByPrice") {
          orderPrice();
        }


        function orderPrice(){
          if(reverse == false){
            filteredByPrice.sort(function(a, b){
              return (parseInt(a['price']) > parseInt(b['price']) ? 1 : -1);
            })
          }else if (reverse == true) {
            filteredByPrice.sort(function(a, b){
              return (parseInt(a['price']) < parseInt(b['price']) ? 1 : -1);
            });
          }
        };
        return filteredByPrice;
      };
    });
}());
