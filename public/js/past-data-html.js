/*
// get button using ID
var myButton = document.getElementbyId('past');

// add event listener to button
// when 'click' call makeRequest()
myButton.addEventListener('click', makeRequest, false);
*/
function makeRequest(){
var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("past-content").innerHTML =
      this.responseText;
    }
  };

	//preare request
	xhttp.open('GET', 'data/past-data.html', true);

	//send request
	xhttp.send(null);
}