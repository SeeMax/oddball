var MasterTL = new TimelineMax()
		MorphSVGPlugin.convertToPath(".convert")

		letterEase = Elastic.easeOut.config(1, .75)
		letterTime = .5
		green1 = '#00A187'
		green2 = '#7ABE8F'
		green3 = '#BFDD9D'
		yellow = '#FAF39F'
		orange = '#F1623D'
		grey1 = '#1C1D1D'


$(document).ready( function(){

	MasterTL.add(circleDown())
					
					.add(eyeOpen(), "eyeOut")
					.add(textOpen("Two"), "eyeOut")
					.add(eyeClose(), "eyeIn+=.3")
					.add(textClose("Two"), "eyeIn+=.2")

					.add(compassOpen(), "compassOut")
					.add(textOpen("Three"), "compassOut+=.21")
					.add(compassClose(), "compassIn+=.4")
					.add(textClose("Three"), "compassIn+=.3")

					.add(circuitOpen(), "circuitOut")
					.add(textOpen("Four"), "circuitOut+=.2")
					.add(circuitClose(), "circuitIn+=.6")
					.add(textClose("Four"), "circuitIn+=.5")

					.add(targetOpen(), "targetOut")
					.add(textOpen("Five"), "targetOut+=.3")
					.add(targetClose(), "targetIn+=.5")
					.add(textClose("Five"), "targetIn+=.5")

					.add(vennOpen(), "vennOut")
					.add(textOpen("Six"), "vennOut+=.2")
					.add(vennClose(), "vennIn+=.5")
					.add(textClose("Six"), "vennIn+=.55")

					
					.add(eyeOut(), "allOut")
					.add(eyeOpen(), "allOut")
					
					.add(compassOut(), "allOut")
					.add(compassOpen(), "allOut")
					
					.add(circuitOut(), "allOut")
					.add(circuitOpenTwo(), "allOut")

					.add(targetOut(), "allOut")
					.add(targetOpen(), "allOut")

					.add(vennOut(), "allOut")
					.add(vennOpenTwo(), "allOut")

					.add(eyeCloseTwo(), "allClose")
					.add(compassClose(), "allClose")
					.add(circuitClose(), "allClose")
					.add(targetCloseTwo(), "allClose")
					.add(vennCloseTwo(), "allClose")

					.add(strokeColor("logo"), "allClose")
					.add(strokeColorTwo("eyeball"), "allClose")
					.add(strokeColorThree("compass"), "allClose")
					.add(strokeColor("circuit"), "allClose")
					.add(strokeColorTwo("target"), "allClose")
					.add(strokeColorThree("venn"), "allClose")
					
					.add(logoOpen(), "letters")
					.add(logoOut(), "letters")
					.add(circuitLetter(), "letters")
					.add(eyeLetter(), "letters")
					.add(compassLetter(), "letters")
					.add(targetLetter(), "letters")
					.add(vennLetter(), "letters")

					.add(subheadOut(), "letters+=.7")
					.add(arrowOut(), "+=1")
					// .timeScale(.5)
          // MasterTL.pause(1);
          // MasterTL.seek(8).resume();
					
})

