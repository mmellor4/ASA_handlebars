var elLoc = document.getElementById('loc');
var msg = 'Sorry, we were unable to get your location.';

function success(position) {
  sessionStorage.setItem('longitude', position.coords.longitude);
  sessionStorage.setItem('latitude', position.coords.latitude);

  msg = '<h2>Location Data</h2>';
  msg += '<h3>Longitude: ' + position.coords.longitude + '</h3>';
  msg += '<h3>Latitude: ' + position.coords.latitude + '</h3>';
  msg += '<p>Your location data has been saved! Reload the page to see.</p>';
  elLoc.innerHTML = msg;
}

function fail(msg) {
  elLoc.textContent = msg;
  console.log(msg.code);
}

function displaySessionData(longitude, latitude) {
  msg = '<h2>Session Location Data</h2>';
  msg += '<h3>Longitude: ' + longitude + '</h3>';
  msg += '<h3>Latitude: ' + latitude + '</h3>';
  msg += '<p>Reusing your saved location data.</p>';
  elLoc.innerHTML = msg;
}

if (!sessionStorage.getItem('longitude') && !sessionStorage.getItem('latitude')) {
  
  if (Modernizr.geolocation) { 
    navigator.geolocation.getCurrentPosition(success, fail);
    elLoc.textContent = 'Checking location...';
  } 

  else 
  {
    elLoc.textContent = msg;
  }
}

else {
  displaySessionData(sessionStorage.getItem('longitude'),sessionStorage.getItem('latitude'));
}




