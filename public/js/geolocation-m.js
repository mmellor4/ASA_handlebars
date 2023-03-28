var elLoc = document.getElementById('loc');
var msg = 'Sorry, we were unable to get your location';

function sucess(position){
	sessionStorage.setItem('longitude', position.coords.longitude);
	sessionStorage.setItem('latitude', position.coords.latitude);

	msg = '<h2>Location Data</h2>';
	msg += '<h3>Longitude ' + position.coords.longitude + '</h3>';
	msg += '<h3>Latitude ' + position.coords.latitude + '</h3>';
	msg += '<p>Your location data has been saved, reload the page to view.</p>';
	elLoc.innerHTML = msg;
}

function fail(msg){
	elLoc.textContent = msg;
	console.log(msg.code);
}

function displaySessionData(longitude,latitude){
	msg = '<h2>Session Location</h2>';
	msg += '<h3>Longitude ' + longitude + '</h3>';
	msg += '<h3>Latitude ' + latitude + '</h3>';
	msg += '<p>Reusing your saved location data.</p>';
	elLoc.innerHTML = msg;
}

navigator.geolocation.getCurrentPosition(sucess, fail);
console.log('test');

if (Modernizr.geolocation){
	
		navigator.geolocation.getCurrentPosition(sucess, fail);
		elLoc.textContent = 'Checking location...';
	} else {
		elLoc.textContent = msg;
	}

/*if (!sessionStorage.getItem('longitude') && !sessionStorage.getItem('latitude')){
	console.log('test');
	if (Modernizr.geolocation){
		navigator.geolocation.getCurrentPosition(sucess, fail);
		elLoc.textContent = 'Checking location...';
	} else {
		elLoc.textContent = msg;
	}
} else {
	displaySessionData(sessionStorage.getItem('longitude'),sessionStorage.getItem('latitude'));
}*/