let display = document.getElementById("display");
let button = [];
let prevNum;
//Could be better
document.getElementById("delete").addEventListener("click", function(){delNumber(display.innerHTML);});
document.getElementById("deleteall").addEventListener("click", function(){delNumber(display.innerHTML, true);});
document.getElementById("plus").addEventListener("click", function(){addNumber("+");});
document.getElementById("minus").addEventListener("click", function(){addNumber("-");});
document.getElementById("divide").addEventListener("click", function(){addNumber("/");});
document.getElementById("multiply").addEventListener("click", function(){addNumber("*");});
document.getElementById("dot").addEventListener("click", function(){addNumber(".");});
document.getElementById("power").addEventListener("click", function(){addNumber("**");});
document.getElementById("equal").addEventListener("click", function(){calc(display.innerHTML);});

for (let i = 0; i <= 9; i++) {
	button[i] = document.getElementById([i]);
	button[i].addEventListener("click", function(){
		addNumber(i);
	});
}

function addNumber(number){
	console.log(prevNum);
	if (isNaN(prevNum) && number == "+") {
		return;
	} else if (isNaN(prevNum) && number == "-") {
		return;
	} else 	if (isNaN(prevNum) && number == "*") {
		return;
	} else 	if (isNaN(prevNum) && number == "/") {
		return;
	} else 	if (isNaN(prevNum) && number == ".") {
		return;
	}
	if (isNaN(number) && display.innerHTML.length == 1 && display.innerHTML == 0){
		return;
	}
	prevNum = number;
	console.log(prevNum);
	display.innerHTML += number;
}

function delNumber(number, deleteall){
	if(deleteall){
		display.innerHTML = "";
		return;
	}
	number = number.toString();
	number = number.slice(0, -1);
	display.innerHTML = number;
}

function calc(expression){
	if(expression == ""){
		console.log("expression is empty");
		return;
	}
	let result = eval(expression); //Replace eval()
	console.log(result);
	display.innerHTML = result;
}
