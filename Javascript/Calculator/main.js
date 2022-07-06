let buttons = document.getElementsByTagName("button");
let display = document.getElementById("display");
//buttons need an identifier
for (var i = 0 ; i < buttons.length; i++) {
	buttons[i].addEventListener("click", addNumber);
}

function addNumber(){
	display = i++;
	console.log(display);
}
