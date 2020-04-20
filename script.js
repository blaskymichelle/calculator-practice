var exp ='', number, decimal, equal, operator, allowSR= true;
var textview = document.forms['myform']['textview'];

function insertNum(num) {
	if (equal) {
		exp = num;
		textview.value = exp;
		number = true;
		equal = false;
	}
	else{
		exp = textview.value + num;
		textview.value = exp;
		number = true;
	}
	if (operator) decimal = false;
	//SR(means something)('a');
}
function insertOp(op){
	
}


/*********** practice***********
function insert(num){
		document.form.textview.value= document.form.textview.value+num
}
function equal(){
		var exp=document.form.textview.value;
		if(exp){
		document.form.textview.value=eval(exp)
	}
}
function clean(){
	document.form.textview.value=""
}
function back(){
	var exp=document.form.textview.value;
	document.form.textview.value=exp.substring(0 exp.length-1);
}***/
