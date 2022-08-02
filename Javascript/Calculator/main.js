var allowedKeys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "Enter", "Backspace", "+", "-",
	"*", "/", "=", "."];

let display = document.getElementById("display");
let button = [];
let prevNum;
//Could be better
//I'm changing this trust me
document.getElementById("delete").addEventListener("click", () => {delNumber(display.innerHTML);});
document.getElementById("deleteall").addEventListener("click", () => {delNumber(display.innerHTML, true);});
document.getElementById("plus").addEventListener("click", () => {addNumber("+");});
document.getElementById("minus").addEventListener("click", () => {addNumber("-");});
document.getElementById("divide").addEventListener("click", () => {addNumber("/");});
document.getElementById("multiply").addEventListener("click", () => {addNumber("*");});
document.getElementById("dot").addEventListener("click", () => {addNumber(".");});
document.getElementById("power").addEventListener("click", () => {addNumber("**");});
document.getElementById("equal").addEventListener("click", () => {calc(display.innerHTML);});

window.addEventListener("keydown", (event) => {addNumber(event.key);}); //doesn't support non-qwerty i think

for (let i = 0; i <= 9; i++) {
	button[i] = document.getElementById([i]);
	button[i].addEventListener("click", () => {
		addNumber(i + ""); //this can't possibly work out well
	});
}

function addNumber(number){
	if (number == "=") {
		number = "+";
	}
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
	} else 	if (isNaN(prevNum) && number == "**") {
		return; //could be shortened?
	}
	if (!allowedKeys.includes(number)) {
		return;
	}
	if (number == "Backspace") {
		delNumber(display.innerHTML);
		return;
	}
	if (number == "Enter") {
		calc(display.innerHTML);
		return;
	}
	if (isNaN(number) && display.innerHTML.length == 1 && display.innerHTML == 0){
		return;
	}
	prevNum = number;
	console.log(number);
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
