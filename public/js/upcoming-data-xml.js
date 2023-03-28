var cultureshow = document.getElementById('culture-show-img');
cultureshow.addEventListener('click', function() {
    changeOpcaity();
    cultureshow.style.opacity = "1";
    makeRequest('data/upcoming-data.xml');
}, false);


function changeOpcaity(){
        var myImg = document.getElementsByTagName('img');
        for (var i = 0; i < myImg; i++){
                var book = myImg[i];
                book.style.opacity = "0.5";
        }
}

function getNodeValue(obj,tag) {
    return obj.getElementsByTagName(tag)[0].firstChild.nodeValue;
} 

function makeRequest(){
    var xhr = new XMLHttpRequest();
    
    var container = document.getElementById('content');
    container.innerHTML = '';
    
    xhr.onload = function(){
        if (xhr.status === 200){
            var response = xhr.responseXML;
            
            var content = response.getElementsByTagName('content');
            
            for (var i = 0; i < content.length; i++){
                var header; 
                
                header = document.createElement('h3');
                header.appendChild(document.createTextNode(getNodeValue(content[i],'header')));
                container.appendChild(header);
                
                var info; 
                
                info = document.createElement('p');
                info.appendChild(document.createTextNode(getNodeValue(content[i],'info')));
                container.appendChild(info);
                
                var info2; 
                
                info2 = document.createElement('p');
                info2.appendChild(document.createTextNode(getNodeValue(content[i],'info2')));
                container.appendChild(info2);
                
                var info3; 
                
                info3 = document.createElement('p');
                info3.appendChild(document.createTextNode(getNodeValue(content[i],'info3')));
                container.appendChild(info3);
                
                
                
                
            }
        }
    };
    
    xhr.open('GET', 'data/upcoming-data.xml', true);
    
    xhr.send(null);
}