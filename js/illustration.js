import { TweenMax, TimelineMax } from "gsap";

let flowers = document.querySelectorAll(".flower");
let rightHand = document.querySelector(".r-hand");
let leftHand = document.querySelector(".l-hand");
let poster = document.querySelector(".poster");

// Set and play tween for Right Hand on illustration
TweenMax.set(rightHand, { transformOrigin: "center bottom" });
let rHand = TweenMax.to(rightHand, 2, {
	rotation: 10,
	repeat: -1,
	yoyo: true,
	ease: Back.easeOut.config(1.7)
});

// Set and play tween for Left Hand on illustration
TweenMax.set(leftHand, { transformOrigin: "right center" });
let lHand = TweenMax.to(leftHand, 2, {
	rotation: -10,
	repeat: -1,
	yoyo: true,
	ease: Back.easeOut.config(1.7)
});

// Set and play tween for Poster on illustration
TweenMax.set(poster, { transformOrigin: "center center" });
let posterTween = TweenMax.to(poster, 5, {
	y: -5,
	rotation: -2,
	repeat: -1,
	yoyo: true
});

TweenMax.set(flowers, { transformOrigin: "center center" });

let flowersTl = new TimelineMax({});
flowersTl.staggerTo(flowers, 1, { scale: 2, repeat: -1, yoyo: true }, 0.5);
flowersTl.play();

let flowerContent = document.querySelector(".flower-content");
flowers.forEach(flower => {
	flower.addEventListener("mouseover", e => {
		// console.log(e.clientX, e.clientY);
        let content = flower.getAttribute("data-content");
        let flowerHeight = flower.getBoundingClientRect().height * 2;
        let flowerX = flower.getBoundingClientRect().x;
        let flowerY = flower.getBoundingClientRect().y;
        console.log(flowerHeight);
        flowerContent.innerHTML = content;

        setTimeout(function(){
            flowerContent.classList.add("show");
        }, 300)

		flowersTl.pause();
		TweenMax.to(flower, 0.2, {
			scale: 1.5,
			rotation: 360,
			ease: Back.easeOut.config(1.7)
		});
        flowerContent.style.top = flowerY -50 + "px";
        flowerContent.style.left = flowerX - 300 + "px";
        // if(e.clientX > 800 ){
        //     flowerContent.style.left = flowerX - 300 + "px";
        // } else {
        //     flowerContent.style.left = flowerX + "px";
        // }

	});
	flower.addEventListener("mouseout", () => {
		// console.log(flower);
		flowerContent.classList.remove("show");
		TweenMax.to(flower, 0.2, {
			scale: 1,
			rotation: 0,
			onComplete: () => {
				flowersTl.kill();
				flowersTl.play();
			}
		});
	});
});
