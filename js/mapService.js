app.service('mapService', ['$q', function($q) {

  this.initMap = function() {
      var initPlace = new google.maps.LatLng(41.8781, 87.6298);

      this.map = new google.maps.Map(document.getElementById('map'), {
        center: initPlace,
        zoom: 200
      });
  };

  this.findEats = function(find) {
    var d = $q.defer();

    this.searchEats = new google.maps.places.PlacesService(map);
    this.searchEats.nearbySearch(find, function(results, status) {
      if (status === 'OK') {
        var picks = [];
        var arr = results;
        var max = arr.length;
        for (var i = 0; i < arr.length; i++) {
          var place = {};
          place.name = arr[i].name;
          // place.isOpen = arr[i].opening_hours.open_now;
          place.price = arr[i].price_level;
          picks.push(place);
        }
        var thePick = randNum(max);
        d.resolve(picks[thePick]);
      } else {
        d.reject(status);
      }
    })
    return d.promise;
  };

  function randNum(max) {
    return Math.floor(Math.random() * (max - 0 + 1)) + 0;
  };


}]);
