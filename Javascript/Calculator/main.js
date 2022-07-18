let display = document.getElementById("display");
let button = [];
//Could be better
document.getElementById("delete").addEventListener("click", function(){delNumber(display.innerHTML);});
document.getElementById("plus").addEventListener("click", function(){addNumber("+");});
document.getElementById("minus").addEventListener("click", function(){addNumber("-");});
document.getElementById("divide").addEventListener("click", function(){addNumber("/");});
document.getElementById("multiply").addEventListener("click", function(){addNumber("*");});
document.getElementById("equal").addEventListener("click", function(){calc(display.innerHTML);});

for (let i = 0; i <= 9; i++) {
	button[i] = document.getElementById([i]);
	button[i].addEventListener("click", function(){
		addNumber(i);
	});
}

function addNumber(number){
	console.log(display.innerHTML.length);
	if (isNaN(number) && display.innerHTML.length == 1){
		return;
	}
	if (display.innerHTML == 0) {
		display.innerHTML = null;
	}
	display.innerHTML += number;
}

function delNumber(number){
	number = number.toString();
	if (number.length == 1) {
		display.innerHTML = 0;
		return;
	}
	number = number.slice(0, -1);
	display.innerHTML = number;
}

function calc(expression){
	let result = eval(expression); //Replace eval()
	console.log(result);
	display.innerHTML = result;
}
