function sendMail() {
    var link = document.getElementById('email').value
			+ "?cc=ddgoodz@gmail.com"
            + "&subject=" + escape("Digital Native Task")
            + "&body=" + escape(document.getElementById('name').value)
			+ "&body=" + escape(document.getElementById('email').value)
			+ "&body=" + escape(document.getElementById('card').value)
    ;

    window.location.href = link;
}
// takes the form field value and returns true on valid number
function cardValidation(value) {
  // accept only digits, dashes or spaces	
	var value = document.getElementById('card').value
if(value == ""){
		alert('Please Enter Card Number');
		document.getElementById('card').style.backgroundColor = "red";
		document.getElementById('card').style.borderColor = "black";
		return false;
	}

	// The Luhn Algorithm
	var nCheck = 0, nDigit = 0, bEven = false;
	value = value.replace(/\D/g, "");
	for (var n = value.length - 1; n >= 0; n--) {
		var cDigit = value.charAt(n),
			  nDigit = parseInt(cDigit, 10);

		if (bEven) {
			if ((nDigit *= 2) > 9) nDigit -= 9;
		}

		nCheck += nDigit;
		bEven = !bEven;
	}
	if ((nCheck % 10) == 0){
	alert("Card Number Correct")
	document.getElementById('card').style.backgroundColor = "lime";
	document.getElementById('card').style.borderColor = "black";
	return true;
	}
	if (/[^0-9-\s]+/.test(document.getElementById('card').value))
		return false;
		document.getElementById('card').style.backgroundColor = "red";
		document.getElementById('card').style.borderColor = "black";
		alert("Card Number Incorrect");
	
}

function nameValidation(){
	//First Name Validation 
	
	var fn=document.getElementById('name').value;
	if(fn == ""){
		alert('Please Enter Name');
		document.getElementById('name').style.backgroundColor = "red";
		document.getElementById('name').style.borderColor = "black";
		return false;
	}
	else{
		document.getElementById('name').style.backgroundColor = "lime";
		document.getElementById('name').style.borderColor = "black";
	}
	if (/^[0-9]+$/.test(document.getElementById("name").value)) {
		alert("Name Contains Numbers!");
		document.getElementById('name').style.backgroundColor = "red";
		document.getElementById('name').style.borderColor = "black";
		
		return false;
	}
	else{
		document.getElementById('name').style.backgroundColor = "lime";
		document.getElementById('name').style.borderColor = "black";
	}
	if(fn.length <=2){
		alert('Your Name is To Short');
		document.getElementById('name').style.backgroundColor = "red";
		document.getElementById('name').style.borderColor = "black";
		return false;
	}
	else{
		document.getElementById('name').style.backgroundColor = "lime";
		document.getElementById('name').style.borderColor = "black";
	}
}

function emailValidation(mail){
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.getElementById('email').value))
  {
	document.getElementById('email').style.backgroundColor = "lime";
	document.getElementById('email').style.borderColor = "black";
    return (true)
  }
  else
	document.getElementById('email').style.backgroundColor = "red";
	document.getElementById('email').style.borderColor = "black";
    alert("You have entered an invalid email address!")
    return (false)
}
	

