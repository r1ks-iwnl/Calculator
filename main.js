let allowedKeys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "Enter", "Backspace", "+", "-",
	"*", "**", "/", "=", ".", "^", "(", ")", "√("];

let noEnd = ["+", "-", "*", "**", "/", "("];

let noDupe = ["+", "-", "*", "/", ".", "^"];

let display = document.getElementById("display");
let button = [];
let prevNum;
//Could be better
//I'm changing this trust me
document.getElementById("delete").addEventListener("click", () => {delNumber(display.innerHTML);});
document.getElementById("deleteall").addEventListener("click", () => {delNumber(display.innerHTML, true);});
document.getElementById("lpara").addEventListener("click", () => {addNumber("(");});
document.getElementById("rpara").addEventListener("click", () => {addNumber(")");});
document.getElementById("plus").addEventListener("click", () => {addNumber("+");});
document.getElementById("minus").addEventListener("click", () => {addNumber("-");});
document.getElementById("divide").addEventListener("click", () => {addNumber("/");});
document.getElementById("multiply").addEventListener("click", () => {addNumber("*");});
document.getElementById("dot").addEventListener("click", () => {addNumber(".");});
document.getElementById("power").addEventListener("click", () => {addNumber("^");});
document.getElementById("sroot").addEventListener("click", () => {addNumber("√(");});
document.getElementById("equal").addEventListener("click", () => {calc(display.innerHTML);});

window.addEventListener("keydown", (event) => {
	event.preventDefault(); //stops enter from triggering "click"
	addNumber(event.key); //doesn't support non-qwerty i think
});

for (let i = 0; i <= 9; i++) {
	button[i] = document.getElementById([i]);
	button[i].addEventListener("click", () => {
		addNumber(`${i}`);
	});
}

function addNumber(number){
	if (number == "=") {
		number = "+";
	}
	if (noDupe.includes(number) && display.innerHTML.length == 0 && number != "-"){
		return;
	}
	if (noDupe.includes(number) && noDupe.includes(display.innerHTML.slice(display.innerHTML.length - 1))) {
		return;
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
	if (document.getElementById("errorbox").innerHTML = "Error!") {
		document.getElementById("errorbox").innerHTML = "";
	}
	prevNum = number;
	display.innerHTML += number;
}

function delNumber(number, deleteall){
	if(deleteall){
		display.innerHTML = "";
		if (document.getElementById("errorbox").innerHTML = "Error!") {
			document.getElementById("errorbox").innerHTML = "";
		}
		return;
	}
	if (document.getElementById("errorbox").innerHTML = "Error!") {
		document.getElementById("errorbox").innerHTML = "";
	}
	number = number.slice(0, -1);
	display.innerHTML = number;
}

function calc(expression){
	let lastNum = expression.slice(expression.length - 1);
	if(expression.includes("(") && expression.slice(0, 1) != "("){
		let lpara = expression.indexOf("(");
		expression = expression.slice(0, lpara) + "*" + expression.slice(lpara);
	}
	if(expression.includes(")") && lastNum != ")"){
		let rpara = expression.indexOf(")");
		expression = expression.slice(0, rpara + 1) + "*" + expression.slice(rpara + 1);
	}
	if(noEnd.includes(lastNum)) {
		document.getElementById("errorbox").innerHTML = "Error!";
		return;
	} else document.getElementById("errorbox").innerHTML = "";
	if(expression == ""){
		console.log("expression is empty");
		return;
	}
	expression = expression.replace("^", "**");
	expression = expression.replace("√(", "Math.sqrt(");
	console.log("expression =", expression);
	let result = Function(`"use strict"; return (${expression});`)();
	console.log(result);
	display.innerHTML = result;
}
