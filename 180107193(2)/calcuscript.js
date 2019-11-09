/*var numver0 = 0;
var number7 = 7;
var number8 = 8;
var number3 = 3;*/
function putInOne(){
	document.calculator.textfield.value += '1';
}
//This function putting 2 in a textfield on button onclick event
function putInTwo(){
	document.calculator.textfield.value += '2';
}
//This function putting 3 in a textfield on button onclick event
function putInThree(){
	document.calculator.textfield.value += '3';
}
//This function putting 4 in a textfield on button onclick event
function putInFour(){
	document.calculator.textfield.value += '4';
}
//This function putting 5 in a textfield on button onclick event
function putInFive(){
	document.calculator.textfield.value += '5';
}
//This function putting 6 in a textfield on button onclick event
function putInSix(){
	document.calculator.textfield.value += '6';
}
//This function putting 7 in a textfield on button onclick event
function putInSeven(){
	document.calculator.textfield.value += '7';
}
//This function putting 8 in a textfield on button onclick event
function putInEight(){
	document.calculator.textfield.value += '8';
}
//This function putting 9 in a textfield on button onclick event
function putInNine(){
	document.calculator.textfield.value += '9';
}
function root(){
	if(document.calculator.textfield.value.indexOf('x')){
		
	}
	let rootValue =  document.calculator.textfield.value**0.5;
	document.calculator.textfield.value = rootValue.toFixed(6);
}
function percentage(){
	document.calculator.textfield.value = document.calculator.textfield.value[-1] / 100;
}
function percentage(){
	document.calculator.textfield.value = document.calculator.textfield.value[-1] / 100;
}
