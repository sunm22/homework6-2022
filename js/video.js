var video = document.getElementById("player1");
var volume = document.getElementById("player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
});

/*play video*/
document.querySelector("#play").addEventListener("click",function(){
	console.log("Play Video")
	video.play()
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
	console.log("Current volume is " + video.volume * 100 + "%")
});

/*pause video*/
document.querySelector("#pause").addEventListener("click",function(){
	console.log("Pause Video")
	video.pause();
});

/*DONE - slow down by 5% each time*/
document.querySelector("#slower").addEventListener("click",function(){
	console.log("Slow Video by 5%")
	video.playbackRate = 0.95*video.playbackRate
	console.log("New speed is " + video.playbackRate)
});

/*DONE - speed up by 5% each time*/
document.querySelector("#faster").addEventListener("click",function(){
	console.log("Speed up Video by 5%")
	video.playbackRate = 1.05*video.playbackRate
	console.log("New speed is " + video.playbackRate)
});

/*DONE - skip*/
document.querySelector("#skip").addEventListener("click",function(){
	console.log("Original time is " + video.currentTime)
	var seekTo = video.currentTime + 15
	if(seekTo > video.duration)
		seekTo = 0;
	video.currentTime = seekTo
	console.log("New time is " + video.currentTime)
});

/*mute, unmute*/
document.querySelector("#mute").addEventListener("click",function(){
	if (video.muted == false) {
        video.muted = true
        document.querySelector("#mute").innerHTML = "Unmute" 
        console.log("Video is now muted")
    }
    else {
        video.muted = false
        document.querySelector("#mute").innerHTML = "Mute"
        console.log("Video is now unmuted")
    }
});

/*volume slider*/
document.querySelector("#slider").addEventListener("click", function() {
    console.log("Current volume is " + this.value + "%")
    video.volume = this.value/100
    document.querySelector("#volume").innerHTML = video.volume*100 + "%"
	console.log("New volume is " + this.value + "%")
})

/*black white view*/
document.querySelector("#vintage").addEventListener("click", function() {
    console.log("Black white view")
    video.classList.add("oldSchool")
})

/*original view*/
document.querySelector("#orig").addEventListener("click", function() {
    console.log("Original view")
    video.classList.remove("oldSchool")
})