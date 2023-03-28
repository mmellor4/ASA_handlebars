// click hello button on about page to get a random greeting in one of five langugages
function getGreeting() {
	num = Math.floor(Math.random() * 5);
    if(num === 0){
    	greeting = "Nǐ hǎo"; //hello in chinese
    }
    if(num === 1){
    	greeting = "Kon'nichiwa";//hello in japanese
    }
    if(num === 2){
    	greeting = "annyeonghaseyo";//hello in korean
    }
    if(num === 3){
    	greeting = "S̄wạs̄dī";//hello in thai
    }
    if(num === 4){
    	greeting = "Xin chào";//hello in vietnamese
    }
  document.getElementById("hello").innerHTML = greeting;
}