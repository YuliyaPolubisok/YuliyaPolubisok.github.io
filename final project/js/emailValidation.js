function validateEmailForm() {
    var email = document.forms["feedback"]["email"].value;
    var emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email == "" || email == null) {
        document.forms["feedback"]["email"].style.borderColor = "red";
        document.getElementById("email").className = "contact-form-name contact-form-style invalid";
        return "Email cannot be empty!";
    }else
    if (!email.match(emailPattern)) {
        document.forms["feedback"]["email"].style.borderColor = "red";
        document.getElementById("email").className = "contact-form-name contact-form-style invalid";
        return "Your email address is not valid!";
    }
    else {
    	document.forms["feedback"]["email"].style.borderColor = "green";
        document.getElementById("email").className = "contact-form-name contact-form-style valid";
        return true;
    }
}
