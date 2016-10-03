function textOpen(headlineNumber) {

	var tl = new TimelineMax()
			baseEase = Elastic.easeOut.config(.75, .75)
			textNumber = $('#textArea'+headlineNumber)

	tl.set(textNumber, {visibility:'visible', x:-100, immediateRender:false})
		.to(textNumber, .3, {x:0, ease: baseEase})

	return tl;
}


function textClose(headlineNumber) {

	var tl = new TimelineMax()
			baseEase = Elastic.easeIn.config(.75, .75)
			textNumber = $('#textArea'+headlineNumber)

	tl.to(textNumber, .3, {x:-100, ease: baseEase})		
		.set(textNumber, {visibility:'hidden', immediateRender:false})
		
	return tl;
}