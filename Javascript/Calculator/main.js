let display = document.getElementById("display");
let button = [];
//Could be better
document.getElementById("plus").addEventListener("click", function(){addNumber("+");});
document.getElementById("minus").addEventListener("click", function(){addNumber("-");});
document.getElementById("divide").addEventListener("click", function(){addNumber("/");});
document.getElementById("multiply").addEventListener("click", function(){addNumber("*");});

for (let i = 1; i <= 9; i++) {
	button[i] = document.getElementById([i]);
	button[i].addEventListener("click", function(){
		addNumber(i);
	});
}

function addNumber(number){
	display.innerHTML += number;
}
