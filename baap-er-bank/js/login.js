// 1.add click eventHandler with submit button
document.getElementById("btn-submit").addEventListener("click", function(){
// 2.get email address inside the input field
// always remember to use .value to get text from an input value
    const emailField = document.getElementById("user-email");
    const email = emailField.value;
// 3. get password
    const passwordField = document.getElementById("user-password");
    const password = passwordField.value;

// 4. DANGER: DO NOT VERIFY PASSWORD ON CLIENTSIDE
// 5. verify email and password
    if (email==="sontan@baap.com" && password==="secret"){
        console.log("valid user")
    }
    else{
        console.log("invalid user");
    }

})