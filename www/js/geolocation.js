var map;

function showCurrentPosition(){
	console.log("Called showcurrentPosition()");
	
		if (navigator.geolocation){
			navigator.geolocation.getCurrentPosition(geolocationSuccess, handleNoGeolocation, {timeout: 3000. enableHighAccuracy: true, maximumAge: 75000});
		}
}

function geolocationSuccess(p){
	$('#Latitude').text("Latitude: " + p.coords.latutude);
	$('#Longitude').text("Longitude: " + p.coords.longitude);
	
		var pos = new google.maps.Latlng(p.coords.latitude, p.coords.longitude);
		
		var mapOptions = {center: pos, zoom: 13, mapTypeId: google.maps.MapTypeId.ROADMAP};
		
		map = new google.maps.Map(document.getElementById('geomap'), mapOptions);
		
		var marker = new google.maps.Marker({position: pos, title: "Jestes Tutaj!"});
		
		marker.setMap(map);
		map.setCenter(pos);
}


function handleNoGeolocation(errorFlag){
	if (errorFlag){
		var content = 'Blad: uslaka lokalizacji nie dzila!';
	}
	Else {
		var content = 'Twoja przegladarka nie obsluguje geolokalizacji!';
	}
	
	console.log("Error: + errorFlag.message);
	
	var options = {map: map, position: new google.maps.LatLng(60, 105), content: content};
	
	var infowindow = new google.maps.InfoWindow(options);
	map.setCenter(options.posiotion);
}
	