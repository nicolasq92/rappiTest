(function() {
    'use strict';

    angular
        .module('rappi')
        .service('defineUrl', defineUrl);

    defineUrl.$inject = [];

    /* @ngInject */
    function defineUrl() {
      var data = 0;
      this.getData = function(){
        return data;
      }

      this.setData = function(value){
        data = value;
      }
    };

})();
