(function () {
    'use strict';

    angular
    .module('cmFilter', [])

    .filter('myfilter', function() {
      return function(items, condition, value) {
        var filtered = [];

        if(condition === undefined || condition === ''){
          return items;
        }

        angular.forEach(items, function(item) {
          if(condition === item.condition ||  item.condition === ''){
            filtered.push(item);
          }

          if(condition == 'name'&& item.name.toLowerCase().indexOf(value.toLowerCase())== 0){
            filtered.push(item);
          }else if (condition == 'available' && item.available == true) {
            filtered.push(item);
          }else if (condition == 'notAvailable'&& item.available == false) {
            filtered.push(item);
          }else if (condition == 'mayor' && parseInt(item.price) >= parseInt('30.000')) {
            filtered.push(item);
          }else if (condition == 'minor' && parseInt(item.price) <= parseInt('10.000')) {
            filtered.push(item);
          }else if (condition == 'bestSeller' && item.best_seller == true) {
            filtered.push(item);
          }else if (condition == 'drinks' || condition == 'lunch' || condition == 'food' || condition == 'sea') {
            angular.forEach(item.categories, function(category){
              if(condition == 'drinks' && category == '1'){
                filtered.push(item);
              }else if (condition == 'lunch' && category == '2') {
                filtered.push(item);
              }else if (condition == 'food' && category == '3') {
                filtered.push(item);
              }else if (condition == 'sea' && category == '4') {
                filtered.push(item);
              }
            })
          }
        });

        return filtered;
      };
    });
}());
