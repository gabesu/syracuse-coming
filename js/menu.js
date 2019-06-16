// Interaction desgin for navigation menu
import { TimelineMax } from "gsap";
// Define all menu DOM elements needed for animation as variables
const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".close-icon");
const navMenu = document.querySelector(".nav-menu");
const menuHeader = document.querySelector(".nav-menu h3");
const menuLinks = document.querySelectorAll(".nav-menu a");
const menuLine1 = document.querySelector(".menu-line-1");
const menuLine2 = document.querySelector(".menu-line-2");

// Create menu timeline instance
let menuTl = new TimelineMax({ paused: true });

// Define animation timeline
menuTl
	.set(navMenu, { scaleY: 0.009 })
	.to(navMenu, 0.5, { scaleX: 1, ease: Power4.easeOut })
	.to([menuLine1, menuLine2], 0.3, {
		attr: { stroke: "white" }
	})
	.to(navMenu, 0.5, { scaleY: 1, x: 20, y: -20, ease: Power4.easeOut })
	.to(menuLine1, 0.1, {
		attr: { x1: 10, y1: 10, x2: 30, y2: 30 }
	})
	.to(menuLine2, 0.1, {
		attr: { x1: 10, y1: 30, x2: 30, y2: 10 }
	})
	.from(menuHeader, 0.3, {
		y: 20,
		opacity: 0,
		delay: 0.1,
		ease: Power2.easeOut
	})
	.staggerFrom(
		menuLinks,
		0.2,
		{
			y: 20,
			opacity: 0,
			delay: 0.3,
			ease: Power2.easeOut
		},
		0.1
	);

// Play animation when the menu icon is clicked
menuIcon.addEventListener("click", () => {
	if (menuTl.paused() || menuTl.reversed()) {
		menuTl.timeScale(1);
		menuTl.play();
	} else {
		menuTl.timeScale(2);
		menuTl.reverse();
	}
});
