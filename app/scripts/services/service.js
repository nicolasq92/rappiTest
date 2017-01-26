(function() {
    'use strict';

    angular
        .module('rappi')
        .service('rappiService', rappiService);

    rappiService.$inject = ['$q', '$http'];

    /* @ngInject */
    function rappiService($q, $http) {
        this.getElements = functionGetElements;

        function functionGetElements(url) {
          var defered = $q.defer();

          $http.get(url).then(function(response){
            defered.resolve(response);
          }, function(err){
            defered.reject(err);
          })
          return defered.promise;
        }
    };
})();
