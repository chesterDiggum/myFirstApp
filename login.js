//create login page
    //create div
   var $loginScreen = $("<div class='loginScreen'></div>")
    //create form
   var $loginForm = $("<form><label>Tell us who you are to send your first message.</label><input type='text'><button>Submit name</button></form>")
     //append form to .loginscreen
    $($loginScreen).append($loginForm)
    //append .loginScreen to the body
    $("body").append($loginScreen)
  


//login screen has a form that collects user ID
//once form submis the login screen hides
