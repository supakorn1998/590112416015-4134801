function getData(){
	value = document.getElementById('in1').value;
	showData(value);
};

function showData(msg){
	console.log(msg);
	document.getElementById('lb1').innarHTML= msg;
};