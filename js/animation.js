import { TimelineMax } from "gsap";
import CSSRulePlugin from "gsap/CSSRulePlugin"; // needed for selecting pseudo-elements like :before or :after
import "typesplit";

let countdown = document.querySelector(".countdown");
let counter = document.querySelector(".counter");
let underline = CSSRulePlugin.getRule("h1:after");
// Split h2 into words using Typesplit
let headerText = new SplitType("h2", {
	split: "words"
});

// Define animation timeline
let tl = new TimelineMax();

tl.from(
	counter,
	1,
	{ y: "10px", opacity: 0, ease: Back.easeOut.config(1.2) },
	"+=1"
)
	.to(countdown, 1, { y: "-16px", ease: Back.easeOut.config(1.2) }, "+=0.3")
	.to(countdown, 1, { y: "-32px", ease: Back.easeOut.config(1.2) }, "+=0.3")
	.to(countdown, 1, { y: "-48px", ease: Back.easeOut.config(1.2) }, "+=0.3")
	.staggerFrom(
		headerText.words,
		0.5,
		{ y: "20px", opacity: 0, ease: Back.easeOut.config(1.2) },
		0.1
	)
	.staggerFrom(
		"li",
		0.8,
		{ y: "20px", opacity: 0, ease: Back.easeOut.config(1.2) },
		0.4
	)
	.from(underline, 0.3, { cssRule: { width: "0" } });
