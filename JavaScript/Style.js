// Entering value into form and displaying suitable message
function validform (){ 
	var fullName = document.form.fullName.value;
	var email = document.form.email.value;
	var subject = document.form.subject.value;
	var Message = document.form.Message.value;

	if(fullName == "" || email == "" || subject == "" || Message == ""  ){
		alert("All the field must be filled up.");
		return false;
	}
	else{
		alert("Thank you for your kind interest!");
	}
}