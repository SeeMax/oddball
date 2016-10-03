var baseEase = Elastic.easeOut.config(.75, .75)
		circleThreeA = $("#circleThreeA")
		circleThreeB = $("#circleThreeB")

		textThree = $("#textAreaThree")
	
		letterThreeA = $("#letterThreeA")
		letterThreeB = $("#letterThreeB")

		circleThreeC = $("#circleThreeC")
		circleThreeD = $("#circleThreeD")
		fullCompass = $('#compass-group')
		compassDial = $('#compass-dial')
		compassTicks = $('#compass-ticks')
		compassParts = [circleThreeC, compassTicks, compassDial]


function compassOpen() {

	var tl = new TimelineMax()

	tl.set(circleThreeA, {visibility:'visible', immediateRender:false})
		.set(compassTicks, {visibility:'visible', immediateRender:false})
		.to(circleThreeA, .3, { morphSVG:{shape:compassDial}, ease: baseEase},"compassOut1")
		.to(circleThreeA, .3, {rotation:450, transformOrigin:'50% 50%'},"compassOut2")
			
	return tl;
}


function compassClose() {

	var tl = new TimelineMax()
	
	tl.to(circleThreeA, .3, {rotation:0, transformOrigin:'50% 50%'})
			.to(circleThreeA, .3, { morphSVG:{shape:circleThreeB}, ease: baseEase})
			.set(circleThreeA, {visibility:'hidden', immediateRender:false})
			.set(compassTicks, {visibility:'hidden', immediateRender:false})
			.to(circleThreeA, 0, { morphSVG:{shape:circleThreeC}})

	return tl;
}


function compassOut() {

	var tl = new TimelineMax()
	baseEase = Elastic.easeOut.config(.75, .75)
	finalCircles = [circleThreeC, circleThreeD]

	tl.set(finalCircles, {visibility:'visible', immediateRender:false})
		.to(fullCompass, .5, {x:323, ease: baseEase});

	return tl;	
}


function compassLetter() {

	var tl = new TimelineMax()

	tl.to(circleThreeC, letterTime, { morphSVG:{shape:letterThreeB, shapeIndex:-4},stroke:green1, x:-17, ease: letterEase}, "popOut")
		.to(circleThreeD, letterTime, { morphSVG:{shape:letterThreeA, shapeIndex:0}, stroke:green1, x:-17, ease: letterEase}, "popOut")

	return tl;	
}