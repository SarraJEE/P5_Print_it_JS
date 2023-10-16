const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let index = 0;
const leftArrow = document.querySelector(".arrow_left");
const rightArrow = document.querySelector(".arrow_right");
const lastSlide = slides.length - 1;
const firstSlide = slides.length + 1;
const imageSlide = document.querySelector(".banner-img");
const tagLine = document.querySelector("#banner p");
const baseUrl = "./assets/images/slideshow/";
let allDots;

function main() {

	initDots();

	prevSlide();

	nextSlide();

}

main();

//Ajoutez des Event Listeners sur les flèches

/*leftArrow.addEventListener("click",  () => {

	console.log("click à gauche");
})

rightArrow.addEventListener("click", function droite() {

	console.log("click à droite");

})*/

function initDots() {

	//Ajoutez des bullet points au slider

	for (let i = 0; i < slides.length; i++) {

		// Créez un élément div

		const nouveauDiv = document.createElement("div");

		// Ajoutez la classe "dot" à l'élément div

		nouveauDiv.className = "dot";

		// Sélectionnez l'élément avec la classe "dots" et ajoutez l'élément div comme enfant

		document.querySelector(".dots").appendChild(nouveauDiv);

	}
	//mettre le premier dot en selected
	allDots = document.querySelectorAll(".dot");
	allDots[index].classList.add("dot_selected");
}
function prevSlide() {

	//Modifiez le slide au clic sur la flêche gauche

	leftArrow.addEventListener("click", () => {

		allDots[index].classList.remove("dot_selected");

		if (index === 0) {

			index = lastSlide;

		}
		else {

			index--;

		}
		updateContentSlide();
	});
}

function nextSlide() {
	//Modifiez le slide au clic sur la flêche droite
	rightArrow.addEventListener("click", () => {

		allDots[index].classList.remove("dot_selected");

		if (index === lastSlide) {
			index = 0;
		}
		else {
			index++;
		}
		updateContentSlide();
	});

}
function updateContentSlide() {

	allDots[index].classList.add("dot_selected");

	imageSlide.src = baseUrl + slides[index].image;

	tagLine.innerHTML = slides[index].tagLine;

}





