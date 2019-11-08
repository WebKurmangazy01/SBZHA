var putInPlus = {
  
  '+': (firstOper, secondOper) => firstOper + secondOper,

} ;
function putInOne(operator){
	operator = 1;
	document.form.textfield.value = document.form.textfield.value + operator;
}
function putInTwo(operator){
	operator = 2;
	document.form.textfield.value = document.form.textfield.value + operator;
}
