// Library for changing background colors by time of a HTML 5 video
// Create stunning fullscreen color effects
// published under MIT license, Valerio Neri

/*
		How to use
		----------
		In the animation sequence 
		var animationSequence=[];
		animationSequence[21] = '#451080';
		animationSequence[25] = '#452080';
		animationSequence[27] = '#085EA0';
		animationSequence[29] = '#AAE580';

		var targetElement = document.getElementById('background');
		var videoElement = Yytplayer;
		var colorAttribute = 'background';
		
		

*/


var ColorfulVideo={
	targetElement:"",
	videoElement:"",
	colorAttribute:"",
	animationSequence:"",
	startValue:"",
	animationKeyPoints:"",
	
	start: function(options){
		ColorfulVideo.targetElement = options.targetElement;
		ColorfulVideo.videoElement = options.videoElement;
		ColorfulVideo.colorAttribute = options.colorAttribute;
		ColorfulVideo.animationSequence = options.animationSequence;
		ColorfulVideo.startValue = ColorfulVideo.targetElement.style[ColorfulVideo.colorAttribute.colorAttribute];
		// set black if empty
		if (ColorfulVideo.startValue == ''){
			ColorfulVideo.startValue = '#0000';
		}
		// set a start value if it was not set
		if (ColorfulVideo.animationSequence[0] == undefined){
			ColorfulVideo.animationSequence[0] = ColorfulVideo.startValue;
		}
		ColorfulVideo.animationKeyPoints = Object.keys(ColorfulVideo.animationSequence).sort(ColorfulVideo.compareNumbers);
		// check the video
      	//
      	window.setInterval(ColorfulVideo.watchTheTime, 50);
		//ColorfulVideo.videoElement.addEventListener("timeupdate", ColorfulVideo.watchTheTime, true);
	},
	
	watchTheTime: function(){
		// check the time and set the color
		var actualValue = ColorfulVideo.animationSequence[Math.round(ColorfulVideo.videoElement.getCurrentTime().toFixed(2) * 1e2) / 1e2];
		if (actualValue == undefined ){
			// search the nearest to the actual time and get that value
			var targetIndex = ColorfulVideo.animationKeyPoints.find(
				function(el){ 
					return el <= Math.round(ColorfulVideo.videoElement.getCurrentTime().toFixed(2) * 1e2) / 1e2;
				});
			if (targetIndex != undefined){
				actualValue = ColorfulVideo.animationSequence[targetIndex];
			} else {
			// if no value available, take the start value
				actualValue = ColorfulVideo.startValue;
			}
		}
		ColorfulVideo.targetElement.style[ColorfulVideo.colorAttribute] = actualValue;
	},
	
	showExactTime:function(){
        	window.setInterval(function(){console.log(ColorfulVideo.videoElement.getCurrentTime().toFixed(2))} , 50);
	},
	
	compareNumbers: function(a,b){
		// sort in ascending order
		return b - a;
	}
	
}
