function validateUserName() {
        var fieldYourName = document.forms["feedback"]["yourname"].value;
        var fieldYourNameLength = fieldYourName.length;
        var allowedChars = /^[a-zA-Z]+$/;

        if (fieldYourName == null || fieldYourName == "") {
            document.forms["feedback"]["yourname"].style.borderColor = "red";
            document.getElementById("yourname").className = "contact-form-name contact-form-style invalid";
            return "Your name cannot be empty!";
        }
        else if (fieldYourNameLength < 2 && allowedChars.test(fieldYourName)) {
            document.forms["feedback"]["yourname"].style.borderColor = "red";
            document.getElementById("yourname").className = "contact-form-name contact-form-style invalid";
            return "Your name is too short!";
        }
        else if (!allowedChars.test(fieldYourName) && fieldYourNameLength > 0) {
            document.forms["feedback"]["yourname"].style.borderColor = "red";
            document.getElementById("yourname").className = "contact-form-name contact-form-style invalid";
            return "Your name must contain only letters!";
        }		
		else {
            document.forms["feedback"]["yourname"].style.borderColor = "green";
            document.getElementById("yourname").className = "contact-form-name contact-form-style valid"; 
            return true;
        }
    }
