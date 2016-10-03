	var circleSixA = $("#circleSixA")
			circleSixB = $("#circleSixB")
			circleSixC = $("#circleSixC")
			circleSixD = $("#circleSixD")

			allVenn = [circleSixA, circleSixB, circleSixC]

			textSix = $("#textAreaSix")
			headlineSix = $("#headlineSix")

			vennOne = $("#vennOne")
			vennTwo = $("#vennTwo")
			vennThree = $("#vennThree")
			

			vennGroup = $("#venn-group")
		
			letterSixA = $("#letterSixA")
			letterSixB = $("#letterSixB")


function vennOpen() {

	var tl = new TimelineMax()
	baseEase = Elastic.easeOut.config(.75, .75);
			
		tl.set(allVenn, {visibility:'visible', immediateRender:false})
			.set(circleOneA, {visibility:'hidden', immediateRender:false})
			.to(circleSixA, .4, { morphSVG:{shape:vennOne}, ease: baseEase},"vennOpen")
			.to(circleSixB, .4, { morphSVG:{shape:vennTwo}, ease: baseEase},"vennOpen")
			.to(circleSixC, .4, { morphSVG:{shape:vennThree}, ease: baseEase},"vennOpen")
			.to(vennGroup, .4, {rotation:360, transformOrigin:"50% 50%"}, "vennOpen")
			
	return tl;
}


function vennClose() {

	var tl = new TimelineMax()
			baseEase = Elastic.easeIn.config(.75, .75);
			
		tl.to(circleSixA, .4, { morphSVG:{shape:circleSixD}, ease: baseEase},"vennClose")
			.to(circleSixB, .4, { morphSVG:{shape:circleSixD}, ease: baseEase},"vennClose")
			.to(circleSixC, .4, { morphSVG:{shape:circleSixD}, ease: baseEase},"vennClose")
			.to(vennGroup, .4, {rotation:0, transformOrigin:"50% 50%"}, "vennClose")
			.set(allVenn, {visibility:'hidden', immediateRender:false})
			.set(circleOneA, {visibility:'visible', immediateRender:false})
			
	return tl;
}


function vennOpenTwo() {

	var tl = new TimelineMax()
	baseEase = Elastic.easeOut.config(.75, .75);
			
		tl.set(allVenn, {visibility:'visible', immediateRender:false})
			.to(circleSixA, .4, { morphSVG:{shape:vennOne}, ease: baseEase},"vennOpen")
			.to(circleSixB, .4, { morphSVG:{shape:vennTwo}, ease: baseEase},"vennOpen")
			.to(circleSixC, .4, { morphSVG:{shape:vennThree}, ease: baseEase},"vennOpen")
			.to(vennGroup, .4, {rotation:360, transformOrigin:"50% 50%"}, "vennOpen")
			
	return tl;
}


function vennCloseTwo() {

	var tl = new TimelineMax()
			baseEase = Elastic.easeIn.config(.75, .75);
			
		tl.to(circleSixA, .4, { morphSVG:{shape:circleSixD}, ease: baseEase},"vennClose")
			.to(circleSixB, .4, { morphSVG:{shape:circleSixD}, ease: baseEase},"vennClose")
			.to(circleSixC, .4, { morphSVG:{shape:circleSixD}, ease: baseEase},"vennClose")
			.to(vennGroup, .4, {rotation:0, transformOrigin:"50% 50%"}, "vennClose")
			.set([circleSixC, circleSixD], {visibility:'hidden', immediateRender:false})
			
	return tl;
}


function vennOut() {

	var tl = new TimelineMax()
			baseEase = Elastic.easeOut.config(.75, .75)

	tl.set(circleSixA, {visibility:'visible', immediateRender:false})
		.to(vennGroup, .5, {x:809, ease: baseEase})
		
	return tl;	
}


function vennLetter() {

	var tl = new TimelineMax()
			
	tl.set([circleSixA, circleSixB], {visibility:'visible', immediateRender:false})
		.to(circleSixB, letterTime, { morphSVG:{shape:letterSixB, shapeIndex:-4}, stroke:green1, x:-17, ease: letterEase}, "popOut")
		.to(circleSixA, letterTime, { morphSVG:{shape:letterSixA, shapeIndex:0}, stroke:green1, x:-17, ease: letterEase}, "popOut")
		
	return tl;	
}