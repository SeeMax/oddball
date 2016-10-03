
function strokeColor(group) {

	var tl = new TimelineMax()
			baseEase = Elastic.easeOut.config(.75, .75)
			strokes = ('#'+ group +'-group *')

	tl.to(strokes,  .1, {stroke:green2})
		.to(strokes,  .1, {stroke:yellow})
		.to(strokes,  .1, {stroke:green3})
		.to(strokes,  .1, {stroke:green2})
		.to(strokes,  .1, {stroke:yellow})
		.to(strokes,  .1, {stroke:green3})

	return tl;	
}


function strokeColorTwo(group) {

	var tl = new TimelineMax()
			baseEase = Elastic.easeOut.config(.75, .75)
			strokes = ('#'+ group +'-group *')

	tl.to(strokes,  .1, {stroke:yellow})
		.to(strokes,  .1, {stroke:green2})
		.to(strokes,  .1, {stroke:green3})
		.to(strokes,  .1, {stroke:yellow})
		.to(strokes,  .1, {stroke:green2})
		.to(strokes,  .1, {stroke:green3})

	return tl;	
}


function strokeColorThree(group) {

	var tl = new TimelineMax()
			baseEase = Elastic.easeOut.config(.75, .75)
			strokes = ('#'+ group +'-group *')

	tl.to(strokes,  .1, {stroke:green3})
		.to(strokes,  .1, {stroke:yellow})
		.to(strokes,  .1, {stroke:green2})
		.to(strokes,  .1, {stroke:green3})
		.to(strokes,  .1, {stroke:yellow})
		.to(strokes,  .1, {stroke:green2})
		 
	return tl;	
}

