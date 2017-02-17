function validateForm() {
  var errors = [];
  var err = validateUserName();
    
  if(err.length > 0) {
    errors.push(err);
  }
  
  err = validateEmailForm();
  if(err.length > 0) {
    errors.push(err);
  }
  
  if(errors.length > 0) {
    var errorMessage = "Please, fill the form correctly:\n";
    for(var i = 0; i < errors.length; i++) {
      errorMessage += "\n" + errors[i];
    }    
    alert(errorMessage);
	return false;
  }
  
  return true;
}
