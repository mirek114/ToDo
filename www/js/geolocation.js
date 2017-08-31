    // onSuccess Callback 
    // This method accepts a Position object, which contains the 
    // current GPS coordinates 
    // 
    // var onSuccess = function(position) {
        // alert('Latitude: '          + position.coords.latitude          + '\n' +
              // 'Longitude: '         + position.coords.longitude         + '\n' +
              // 'Altitude: '          + position.coords.altitude          + '\n' +
              // 'Accuracy: '          + position.coords.accuracy          + '\n' +
              // 'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
              // 'Heading: '           + position.coords.heading           + '\n' +
              // 'Speed: '             + position.coords.speed             + '\n' +
              // 'Timestamp: '         + position.timestamp                + '\n');
    // };
 
   // onError Callback receives a PositionError object 
    
    // function onError(error) {
        // alert('code: '    + error.code    + '\n' +
              // 'message: ' + error.message + '\n');
    // }
 
    // navigator.geolocation.getCurrentPosition(onSuccess, onError);
	
	
	
	
	
	
	var Latitude = undefined;
var Longitude = undefined;
 
// Get geo coordinates 
 
function getMapLocation() {
 
    navigator.geolocation.getCurrentPosition
    (onMapSuccess, onMapError, { enableHighAccuracy: true });
	
	getMap(latitude, longitude);
}
 
// Success callback for get geo coordinates 
 
var onMapSuccess = function (position) {
 
    Latitude = position.coords.latitude;
    Longitude = position.coords.longitude;
 
    getMap(Latitude, Longitude);
 
}
 
// Get map by using coordinates 
 
function getMap(latitude, longitude) {
 
    var mapOptions = {
        center: new google.maps.LatLng(0, 0),
        zoom: 1,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
 
    map = new google.maps.Map
    (document.getElementById("map"), mapOptions);
 
 
    var latLong = new google.maps.LatLng(latitude, longitude);
 
    var marker = new google.maps.Marker({
        position: latLong
    });
 
    marker.setMap(map);
    map.setZoom(15);
    map.setCenter(marker.getPosition());
}
 
// Success callback for watching your changing position 
 
var onMapWatchSuccess = function (position) {
 
    var updatedLatitude = position.coords.latitude;
    var updatedLongitude = position.coords.longitude;
 
    if (updatedLatitude != Latitude && updatedLongitude != Longitude) {
 
        Latitude = updatedLatitude;
        Longitude = updatedLongitude;
 
        getMap(updatedLatitude, updatedLongitude);
    }
}
 
// Error callback 
 
function onMapError(error) {
    console.log('code: ' + error.code + '\n' +
        'message: ' + error.message + '\n');
}
 
// Watch your changing position 
 
function watchMapPosition() {
 
    return navigator.geolocation.watchPosition
    (onMapWatchSuccess, onMapError, { enableHighAccuracy: true });
}
 
	
	