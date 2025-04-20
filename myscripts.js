function submitForm(event) {
    event.preventDefault();
    var name = document.getElementById("nameInput").value;
    var email = document.getElementById("emailInput").value;
    var number = document.getElementById("numberInput").value;
    console.log("name:",name);
    console.log("email:",email);
    console.log("number:",number);
    if (name === ""){
        document.getElementById("missingName").style.display= "inline";
        return false;
    }
    else {
        document.getElementById("missingName").style.display= "none";
    }
    if (email === "" || email.indexOf("@") < 0){
        document.getElementById("missingEmail").style.display= "inline";
        return false;
    }
    else {
        document.getElementById("missingEmail").style.display= "none";
    }
    if (number === ""){
        document.getElementById("missingNumber").style.display= "inline";
        return false;
    }
    else {
        document.getElementById("missingNumber").style.display= "none";
    }
    console.log("form is valid");
    return true;
}