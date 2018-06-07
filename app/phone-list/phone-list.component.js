// Register `phoneList` component, along with its associated controller and template
angular.
  module('phoneList')
  .component('phoneList', {
    templateUrl: '/phone-list/phone-list.template.html',
    controller: [
      '$http',
      function($http) {
        var that = this;
        this.phones = [];

        // Phones
        $http.get('/phones/phones.json')
          .then(function(res) {
            angular.copy(res.data, that.phones);
          });

        // Sorting
        this.orderProp = 'age';
      }
    ]
  });
