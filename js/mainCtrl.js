app.controller('mainCtrl', ['$scope', 'mapService', function($scope, mapService) {

  $scope.eatOptions = {};
  $scope.eatOptions.location = $scope.location;
  $scope.eatOptions.radius = '15';
  $scope.eatOptions.type = 'restaurant';

  $scope.pickDinner = function() {
    var loc = new google.maps.LatLng(40.034378, -111.732246);
    var dubJ = new google.maps.LatLng(40.609621, -111.983401);
    $scope.eatOptions = {
      location: dubJ,
      radius: '10000',
      types: ['restaurant']
    }
    mapService.findEats($scope.eatOptions)
    .then(function(res) {
      $scope.yourDinner = res;
    })
    .catch(console.error);
  };

  mapService.initMap();

}]);
