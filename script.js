var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("enter");

window.addEventListener('load', function(){
	css.appendChild(document.createTextNode("linear-gradient(to right, red , yellow) repeat scroll 0% 0%;"));
})

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);


button.addEventListener("click", function(){
	
	var rr = Math.floor((Math.random() * 255) + 1); 
	var gg = Math.floor((Math.random() * 255) + 1);
	var bb = Math.floor((Math.random() * 255) + 1);
	var rr2 = Math.floor((Math.random() * 255) + 1); 
	var gg2 = Math.floor((Math.random() * 255) + 1);
	var bb2 = Math.floor((Math.random() * 255) + 1);

	body.style.background = 
	"linear-gradient(to right, rgb("+rr+","+gg+","+bb+"), rgb("+rr2+","+gg2+","+bb2+"))";
	css.textContent = body.style.background + ";";

})
