app.controller('mainCtrl', ['$scope', 'mapService', function($scope, mapService) {

  $scope.eatOptions = {};
  $scope.eatOptions.location = $scope.location;
  $scope.eatOptions.radius = '15';
  $scope.eatOptions.type = 'restaurant';

  $scope.pickDinner = function() {
    mapService.findEats($scope.eatOptions)
    .then(function(res) {
      console.log(res);
    })
  };


  mapService.initMap();

}]);
