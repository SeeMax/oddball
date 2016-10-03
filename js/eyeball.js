var circleTwoA = $("#circleTwoA")
		circleTwoB = $("#circleTwoB")
		circleTwoC = $("#circleTwoC")

		letterTwoA = $("#letterTwoA")
		letterTwoB = $("#letterTwoB")

		textTwo = $("#textAreaTwo")
		headlineTwo = $("#headlineTwo")

		lid = $('#main-lid')
		iris = $('#iris')
		lidOne = $('#lid-one')
		lidTwo = $('#lid-two')
		lidThree = $('#lid-three')
		lidFour = $('#lid-four')
		fullEye = $('#eyeball-group')


function eyeOpen() {

	var tl = new TimelineMax()
			baseEase = Elastic.easeOut.config(.75, .75);

	tl.set(lid, {visibility:'visible', immediateRender:false})
		.set(iris, {visibility:'visible', immediateRender:false})
		.to(lid, .3, { morphSVG:{shape:lidTwo}, ease: baseEase},"moveTwo")
		.to(lid, .3, { morphSVG:{shape:lidThree}, ease: baseEase}, "moveThree")
		.to(iris, .3, {x:15, ease: baseEase}, "moveThree")
	
	return tl;
}


function eyeClose() {

	var tl = new TimelineMax()
			baseEase = Elastic.easeOut.config(.75, .75);

	tl.to(iris, .2, {x:0, ease: baseEase})
		.to(lid, .1, { morphSVG:{shape:lidFour}, ease: baseEase}, "moveFour")
		.to(lid, .1, { morphSVG:{shape:lidThree}, ease: baseEase}, "moveFive")
		.to(iris, .1, {x:2, ease: baseEase}, "moveFive")
		.to(lid, .1, { morphSVG:{shape:lidFour}, ease: baseEase}, "moveSix")
		.to(iris, .1, {x:0, ease: baseEase}, "moveSix")
		.to(lid, .1, { morphSVG:{shape:lidThree}, ease: baseEase}, "moveSeven")
		.to(lid, .1, { morphSVG:{shape:circleTwoC}, ease: baseEase}, "moveEight")
		.set(lid, {visibility:'hidden', immediateRender:false})
		.set(iris, {visibility:'hidden', immediateRender:false})	
	
	return tl;
}


function eyeCloseTwo() {

	var tl = new TimelineMax()
			baseEase = Elastic.easeOut.config(.75, .75);

	tl.to(iris, .2, {x:0, ease: baseEase})
		.to(lid, .1, { morphSVG:{shape:lidThree}, ease: baseEase})
		.to(lid, .1, { morphSVG:{shape:circleTwoC}, ease: baseEase})
		.set(lid, {visibility:'hidden', immediateRender:false})
		.set(iris, {visibility:'hidden', immediateRender:false})	
	
	return tl;
}


function eyeOut() {

	var tl = new TimelineMax()
			baseEase = Elastic.easeOut.config(.75, .75)
			eyeParts = [circleTwoA, circleTwoB]

	tl.set(eyeParts, {visibility:'visible', immediateRender:false})
		.to(fullEye, .5, {x:161, ease: baseEase})
		
	return tl;	
}


function eyeLetter() {

	var tl = new TimelineMax()

	tl.to(circleTwoA, letterTime, { morphSVG:{shape:letterTwoA, shapeIndex:0}, stroke:green1, x:-17, ease: letterEase}, "popOut")
		.to(circleTwoB, letterTime, { morphSVG:{shape:letterTwoB, shapeIndex:-4}, stroke:green1, x:-17, ease: letterEase}, "popOut")

	return tl;	
}