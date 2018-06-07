angular
  .module('phoneDetail')
  .component('phoneDetail', {
    templateUrl: '/phone-detail/phone-detail.template.html',
    controller: [
      '$http', '$routeParams',
      function($http, $routeParams) {
        var that = this;

        $http
          .get('/phones/' + $routeParams.phoneId  + '.json')
          .then(function(res) {
            that.phone = res.data;
            console.log(res);
          })
          .catch(function(err) {
            console.error(err);
          });
      }
    ]
  });
