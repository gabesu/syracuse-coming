// Interaction desgin for navigation menu
import { TimelineMax } from "gsap";
import { CSSRulePlugin } from "gsap/CSSRulePlugin"; // ! NOT WORKING: needed for selecting pseudo-elements like :before or :after
import "typesplit";

let navBtn = document.querySelector(".nav-btn");
let logo = document.querySelector(".logo");
let countdown = document.querySelector(".countdown");
let counter = document.querySelector(".counter");
const content = document.querySelector(".content");
let header = document.querySelector(".caption h1");
let caption = document.querySelector(".caption p");
let underline = CSSRulePlugin.getRule("h1:after");
const greyDots = document.querySelectorAll(".grey-dots g");
const orangeDots = document.querySelectorAll(".orange-dots g");

// Split h2 into words using Typesplit
let headerText = new SplitType(header, {
	split: "words"
});
// Split h2 into words using Typesplit
let captionText = new SplitType(caption, {
	split: "lines"
});

// Create menu timeline instance
let mainTl = new TimelineMax({ paused: true });

mainTl
	.from(
		counter,
		1,
		{ y: "10px", opacity: 0, ease: Back.easeOut.config(1.2) },
		"+=1"
	)
	.to(countdown, 1, { y: "-24px", ease: Back.easeOut.config(1.2) }, "+=0.3")
	.to(countdown, 1, { y: "-48px", ease: Back.easeOut.config(1.2) }, "+=0.3")
	.to(countdown, 1, { y: "-72px", ease: Back.easeOut.config(1.2) }, "+=0.3")
	.to(counter, 1, {
		y: "-10px",
		opacity: 0,
		ease: Back.easeOut.config(1.2),
		delay: 0.5
	})
	.set(counter, {
		display: "none"
	})
	.fromTo(
		content,
		2,
		{
			clipPath: "inset(0% 100% 0% 0%)",
			webkitClipPath: "inset(0% 100% 0% 0%)"
		},
		{
			clipPath: "inset(0% 0% 0% 0%)",
			webkitClipPath: "inset(0% 0% 0% 0%)",
			ease: Power4.easeOut
		}
	)
	.staggerFrom(
		headerText.words,
		0.5,
		{ y: "20px", opacity: 0, ease: Back.easeOut.config(1.2) },
		0.1
	)
	.from(underline, 0.3, { cssRule: { width: "0" } })
	.staggerFrom(
		captionText.lines,
		1,
		{ y: "20px", opacity: 0, ease: Back.easeOut.config(1.2) },
		0.5
	)
	.from(logo, 0.5, { y: -20, autoAlpha: 0, ease: Power4.easeOut })
	.from(navBtn, 0.5, { autoAlpha: 0, ease: Power4.easeOut })
	.staggerFrom(
		orangeDots,
		2,
		{ scale: 0, ease: Elastic.easeOut.config(1, 0.3) },
		0.01
	)
	.staggerFrom(
		greyDots,
		2,
		{ scale: 0, ease: Elastic.easeOut.config(1, 0.3) },
		0.01,
		"-=5"
	);

// mobile animation

// let mobileTl = new TimelineMax({ paused: true });

// mobileTl
// 	.from(
// 		counter,
// 		1,
// 		{ y: "10px", opacity: 0, ease: Back.easeOut.config(1.2) },
// 		"+=1"
// 	)
// 	.to(countdown, 1, { y: "-24px", ease: Back.easeOut.config(1.2) }, "+=0.3")
// 	.to(countdown, 1, { y: "-48px", ease: Back.easeOut.config(1.2) }, "+=0.3")
// 	.to(countdown, 1, { y: "-72px", ease: Back.easeOut.config(1.2) }, "+=0.3")
// 	.to(counter, 1, {
// 		y: "-10px",
// 		opacity: 0,
// 		ease: Back.easeOut.config(1.2),
// 		delay: 0.5
// 	})
// 	.set(counter, {
// 		display: "none"
// 	})
// 	.fromTo(
// 		content,
// 		2,
// 		{
// 			clipPath: "inset(0% 100% 0% 0%)",
// 			webkitClipPath: "inset(0% 100% 0% 0%)"
// 		},
// 		{
// 			clipPath: "inset(0% 0% 0% 0%)",
// 			webkitClipPath: "inset(0% 0% 0% 0%)",
// 			ease: Power4.easeOut
// 		}
// 	)
// 	.staggerFrom(
// 		headerText.words,
// 		0.5,
// 		{ y: "20px", opacity: 0, ease: Back.easeOut.config(1.2) },
// 		0.1
// 	)
// 	.from(underline, 0.3, { cssRule: { width: "0" } })
// 	.from(".swipe-container", 1, {
// 		y: "20px",
// 		opacity: 0,
// 		ease: Back.easeOut.config(1.2)
// 	})
// 	.from(logo, 0.5, { y: -20, autoAlpha: 0, ease: Power4.easeOut })
// 	.from(navBtn, 0.5, { autoAlpha: 0, ease: Power4.easeOut });

// if (window.innerWidth < 600) {
// 	mobileTl.play();
// } else {
// 	mainTl.play();
// }

mainTl.play();
