let display = document.getElementById("display");
let button = [];

for (let i = 1; i <= 9; i++) {
	button[i] = document.getElementById([i]);
	button[i].addEventListener("click", function(){
		addNumber(i);
	});
}

function addNumber(number){
	display.innerHTML += number;
}
