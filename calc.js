var a = '';
var b = '';
var num = [];
var num1;
var ans;

function sendNum(digit){
	num.push(digit);
    if(num.length != 1){
		a = '';
		document.getElementById('screen').innerHTML = a;	
	}
	for(i=0; i<num.length; i++){
		a = a + num[i];				
	}
    document.getElementById('screen').innerHTML = a;	
}

function equalTo(){
	document.getElementById('screen').innerHTML = '';
	for(i=0; i<num.length; i++){
		b += num[i];						
	}
    ans = eval(b);	
    document.getElementById('screen').innerHTML = ans;		

	while(num.length > 0){
    	num.pop();				
	}

	// num.push(ans.toString());
}

function clearScr(){
	document.getElementById('screen').innerHTML = '';
	
	while(num.length > 0){
    	num.pop();				
	}

	a ='';	
	b ='';
}

function erase(){
	// 
	// document.getElementById('screen').innerHTML = a;
    // for(i=0; i<num.length; i++){
	// 	a = num.slice(0,-1);				
	// }
	// display.innerText = display.innerText.slice(0, -1);
	b.innerText = b.innerText.slice(0,-1);
}	  