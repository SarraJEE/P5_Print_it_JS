const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const leftArrow=document.querySelector(".arrow_left");
const rightArrow=document.querySelector(".arrow_right");


//Ajoutez des Event Listeners sur les flèches 

leftArrow.addEventListener("click", function gauche() {
	alert("click à gauche");	
})

rightArrow.addEventListener("click", function droite() {
	console.log("click à droite");	
})

//Ajoutez des bullet points au slider

for (let i=0;i<slides.length;i++){  
	// Créez un élément div
	const nouveauDiv = document.createElement("div");
  
	// Ajoutez la classe "dot" à l'élément div
	nouveauDiv.className = "dot";
  
	// Sélectionnez l'élément avec la classe "dots" et ajoutez l'élément div comme enfant
	document.querySelector(".dots").appendChild(nouveauDiv);


}


