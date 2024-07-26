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
const slideImage = document.getElementById("slide");
const slideText = document.querySelector("#banner p");
const dots = document.querySelectorAll(".dot");
let NumeroImage = 0

//Algorithme Fleches

let monBoutonDroit = document.getElementById("boutonDroit");
monBoutonDroit.addEventListener("click",function(){
	NumeroImage =(NumeroImage+1)% slides.length;
	updateSlide();
console.log("ImageSuivante")
});


let monBoutonGauche = document.getElementById("boutonGauche");
monBoutonGauche.addEventListener("click",function(){
	NumeroImage =(NumeroImage+3)% slides.length
	updateSlide();
console.log("ImagePrecedente")
});

//Fonction Images/Points

let selectionPoint = document.querySelectorAll(".dot")
	console.log(selectionPoint)
selectionPoint[NumeroImage].classList.add("dot_selected")


function updateSlide(){
slideImage.src="./assets/images/slideshow/"+slides[NumeroImage].image
slideText.innerHTML = slides[NumeroImage].tagLine

for (let i = 0; i < dots.length; i++) {
	if (i === NumeroImage) {
		dots[i].classList.add("dot_selected");
	} else {
		dots[i].classList.remove("dot_selected");
	}
}
}
