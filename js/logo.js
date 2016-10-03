var logoGroup = $("#logo-group")

		circleOneA = $("#circleOneA")
		circleOneB = $("#circleOneB")
		letterOne = $("#letterOne")

		subHead = $("#subHead")
		subHeadText = $("#subHeadText")

		downArrow = $("#downArrow")
		
		logoLineA = $("#logoLineA")
		logoLineB = $("#logoLineB")


function circleDown() {
	var tl = new TimelineMax()
	baseEase = Elastic.easeInOut.config(.75, .75);

	tl.set(circleOneA, {visibility:'visible', immediateRender:false})
		.to(circleOneA, .5, { morphSVG:{shape:circleOneB}, ease: Elastic.easeIn.config(2, .5)});
	
	return tl;
}


function logoOpen() {

	var tl = new TimelineMax()
	baseEase = Elastic.easeIn.config(.75, .75)
			
	tl.set(logoLineA, {visibility:"visible"})
		.set(logoLineB, {visibility:"visible"})
	
		.set(logoLineA, {drawSVG:"0% 0%"})
		.set(logoLineB, {drawSVG:"100% 100%"})
		.to(logoLineA, .2, {drawSVG:"100% 0%", stroke:green1, ease: baseEase}, "popOut")
		.to(logoLineB, .2, {drawSVG:"100% 0%", stroke:green1, ease: baseEase}, "popOut")
		.to(circleOneA, .2, {stroke:green1, ease: baseEase}, "popOut")

	return tl;
}


function logoClose() {

	var tl = new TimelineMax()
			
	tl.to(logoLineA, .5, {drawSVG:"0% 0%", ease: Power4.easeIn}, "popOut")
		.to(logoLineB, .5, {drawSVG:"100% 100%", ease: Power4.easeIn}, "popOut")
		.set([logoLineA, logoLineB], {visibility:"hidden", immediateRender:false})
		
	return tl;
}
	

function logoOut() {

	var tl = new TimelineMax()
	baseEase = Elastic.easeOut.config(.75, .75)
			
	tl.to(logoGroup, .4, { x:93, ease: letterEase})	

	return tl;
}



function subheadOut() {

	var tl = new TimelineMax()
	baseEase = Circ.EaseInOut
			
	tl.set(subHead, {visibility:"visible", y:5, opacity:0, transformOrigin:"50% 50%", immediateRender:false})
		.to(subHead, 1.3, {y:0, opacity:1, ease: baseEase})

	return tl;
}


function arrowOut() {

	var tl = new TimelineMax()
	baseEase = Circ.EaseIn
			
	tl.set(downArrow, {visibility:"visible", y:-15, opacity:0, transformOrigin:"50% 50%", immediateRender:false})
		.to(downArrow, .3, {y:0, opacity:1, ease: baseEase})
		
	return tl;
}

