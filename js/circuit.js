var circleFourA = $("#circleFourA")
		circleFourB = $("#circleFourB")

		textFour = $("#textAreaFour")
		headlineFour = $("#headlineFour")

		letterFourA = $("#letterFourA")
		letterFourB = $("#letterFourB")

		ends = $('.circuit-ends')
		lines = $('.circuit-line')
		circuitParts = [lines, ends]
		circuitGroup = $('#circuit-group')


function circuitOpen() {

	var tl = new TimelineMax()
			
		tl.set(lines, {drawSVG:"100% 100%"})
			.set(ends, {scale:0})
			.set(circuitParts, {visibility:'visible', immediateRender:false})
			.to(circleOneA, .075, {scale:1.2})
			.to(circleOneA, .075, {scale:.9})
			.to(circleOneA, .075, {scale:1})
			.to(ends, .06, {scale:1, ease: Circ.EaseIn})
			.staggerTo(lines, .05, {drawSVG:"0% 100%", ease: Circ.EaseIn}, .025)
			
	return tl;
}


function circuitClose() {

	var tl = new TimelineMax()
			
		tl.to(lines, .15, {drawSVG:"100% 100%", ease: Circ.EaseIn})
			.to(ends, .15, {scale:0, ease: Circ.EaseIn})
			.set(circuitParts, {visibility:'hidden'})
			
	return tl;
}


function circuitOut() {

	var tl = new TimelineMax()
			baseEase = Elastic.easeOut.config(.75, .75)

	tl.set(circleFourA, {visibility:'visible', immediateRender:false})
		.set(circleFourB, {visibility:'visible', immediateRender:false})
		.to(circuitGroup, .3, {x:485, ease: baseEase}, "moveOut")
		
	return tl;	
}


function circuitOpenTwo() {

	var tl = new TimelineMax()
			finalCirc = $(".final-circle")
			finalLine = $(".final-line")
			
		tl
			.set(circuitParts, {visibility:'visible', immediateRender:false})
			.to(finalCirc, .15, {scale:1, ease: Circ.EaseIn})
			.to(finalLine, .15, {drawSVG:"0% 100%", ease: Circ.EaseIn})
			
	return tl;
}


function circuitLetter() {

	var tl = new TimelineMax()

	tl.to(circleFourB, letterTime, { morphSVG:{shape:letterFourB, shapeIndex:-4}, stroke:green1, x:-17, ease: letterEase}, "popOut")
		.to(circleFourA, letterTime, { morphSVG:{shape:letterFourA, shapeIndex:0}, stroke:green1, x:-17, ease: letterEase}, "popOut")
		
	return tl;	
}