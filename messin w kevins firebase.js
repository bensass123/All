
var myVar, maxtimelimit = 1000000, timelimit = maxtimelimit;  // set seconds per question at maxtimelimit

function startTimer() {
  myVar = setInterval(function(){myTimer()},10);
  console.log('one second ' + timelimit);
  timelimit = maxtimelimit;
}

function myTimer() {
	console.log('myTimer called');
	if (timelimit > 0) {
		curmin=Math.floor(timelimit/60);
		cursec=timelimit%60;
		
		if (curmin!=0) { 
			curtime=curmin+" minutes and "+cursec+" seconds left until earth is destroyed. CLICK TO SAVE YOURSELVES <img src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png' alt=''>"; 
		}
		else{ 
			curtime=cursec+" seconds left until earth is destroyed";
		}
				
		database.ref().set({
        clickCount: curtime});
	} 
	else{
		database.ref().set({
        clickCount: "TIME'S UP HUMANS!"});
		clearInterval(myVar);
		g.userIncorrect('nothing!');
	}
  timelimit--;
}