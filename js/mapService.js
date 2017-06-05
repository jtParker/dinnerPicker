app.service('mapService', ['$q', function($q) {


  this.initMap = function() {
      var initPlace = new google.maps.LatLng(41.8781, 87.6298);

      this.map = new google.maps.Map(document.getElementById('map'), {
        center: initPlace,
        zoom: 200
      });
      console.log(this.map);
  };

  this.findEats - function(find) {
    var d = $q.defer;

    this.searchEats = new google.maps.places.PlacesService(map);
    this.searchEats.nearbySearch(find, function(results, status) {
      if (status === 'OK') {
        d.resolve(results)
        console.log(results)
      } else {
        d.reject(status);
      }
    })
    return d.promise;
  };

}]);
