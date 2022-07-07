let display = document.getElementById("display");
let button = [];

for (let i = 1; i <= 9; i++) {
	button[i] = document.getElementById([i]);
	button[i].addEventListener("click", addNumber(i), console.log(i)); //clicking unresponsive
}

function addNumber(number){
	display.innerHTML = number;
}
