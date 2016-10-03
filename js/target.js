var circleFiveA = $("#circleFiveA")
		circleFiveB = $("#circleFiveB")
		circleFiveC = $("#circleFiveC")
		circleFiveD = $("#circleFiveD")
		circleFiveE = $("#circleFiveE")

		textFive = $("#textAreaFive")
		headlineFive = $("#headlineFive")

		letterFiveA = $("#letterFiveA")
		letterFiveB = $("#letterFiveB")

		targetGroup = $("#target-group")

		ringTwo = $('#ring-two')
		ringThree = $('#ring-three')
		ringFour = $('#ring-four')
		ringFive = $('#ring-five')

		allRings = [circleFiveB, circleFiveC, circleFiveD, circleFiveE]


function targetOpen() {

	var tl = new TimelineMax()
	baseEase = Bounce.easeOut
			
		tl.to(circleOneA, .075, {scale:1.2})
			.to(circleOneA, .075, {scale:.9})
			.to(circleOneA, .075, {scale:1})
			.set(allRings, {visibility:'visible', immediateRender:false})
			.to(circleFiveB, .3, {morphSVG:{shape:ringTwo}, ease:baseEase}, "ringsIn")
			.to(circleFiveC, .3, {morphSVG:{shape:ringThree}, ease:baseEase}, "ringsIn")
			.to(circleFiveD, .3, {morphSVG:{shape:ringFour}, ease:baseEase}, "ringsIn")
			.to(circleFiveE, .3, {morphSVG:{shape:ringFive}, ease:baseEase}, "ringsIn")
			
			
	return tl;
}


function targetClose() {

	var tl = new TimelineMax()
	baseEase = Bounce.easeIn
			
		tl.to(circleFiveB, .3, {morphSVG:{shape:circleFiveA}, ease:baseEase}, "ringsIn")
			.to(circleFiveC, .3, {morphSVG:{shape:circleFiveA}, ease:baseEase}, "ringsIn")
			.to(circleFiveD, .3, {morphSVG:{shape:circleFiveA}, ease:baseEase}, "ringsIn")
			.to(circleFiveE, .3, {morphSVG:{shape:circleFiveA}, ease:baseEase}, "ringsIn")
			.set(allRings, {visibility:'hidden', immediateRender:false})
			
	return tl;
}


function targetCloseTwo() {

	var tl = new TimelineMax()
	baseEase = Bounce.easeIn
	otherRings = [circleFiveC, circleFiveD, circleFiveE]
			
		tl.to(circleFiveB, .3, {morphSVG:{shape:circleFiveA}, ease:baseEase}, "ringsIn")
			.to(circleFiveC, .3, {morphSVG:{shape:circleFiveA}, ease:baseEase}, "ringsIn")
			.to(circleFiveD, .3, {morphSVG:{shape:circleFiveA}, ease:baseEase}, "ringsIn")
			.to(circleFiveE, .3, {morphSVG:{shape:circleFiveA}, ease:baseEase}, "ringsIn")
			.set(otherRings, {visibility:'hidden', immediateRender:false})
			
	return tl;
}


function targetOut() {

	var tl = new TimelineMax()
			baseEase = Elastic.easeOut.config(.75, .75)

	tl.set(circleFiveA, {visibility:'visible', immediateRender:false})
		.set(circleFiveB, {visibility:'visible', immediateRender:false})
		.to(targetGroup, .5, {x:647, ease: baseEase}, "moveOut")
		
	return tl;	
}


function targetLetter() {

	var tl = new TimelineMax()

	tl.set(circleFiveB, {visibility:'visible', immediateRender:false})
		.to(circleFiveB, letterTime, { morphSVG:{shape:letterFiveB, shapeIndex:-4}, stroke:green1, x:-17, ease: letterEase}, "popOut")
		.to(circleFiveA, letterTime, { morphSVG:{shape:letterFiveA, shapeIndex:0}, stroke:green1, x:-17, ease: letterEase}, "popOut")
		
	return tl;	
}