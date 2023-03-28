var myButton = document.getElementById('morePhotos');
myButton.addEventListener('click',makeRequest,false);

function makeRequest(){
    var xhr = new XMLHttpRequest();
    
    xhr.onload = function(){
        if (xhr.status === 200){
            responseObject = JSON.parse(xhr.responseText);
            
            var newContent = '';
            
            for (var i = 0; i < responseObject.content.length; i++){
                newContent += '<h3>' + responseObject.content[i].header + '</h3>';
                newContent += '<p>' + responseObject.content[i].paragraph + '</p>';
                
            }
            
            document.getElementById('more-photos').innerHTML = newContent;
        }
    };
    
    xhr.open('GET', 'data/more-photos.json',true);
    xhr.send(null);
}