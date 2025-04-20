function submitForm(event) {
    event.preventDefault();
    var name = document.getElementById("nameInput").value;
    var email = document.getElementById("emailInput").value;
    var number = document.getElementById("numberInput").value;
    console.log("name:",name);
    console.log("email:",email);
    console.log("number:",number);
    window.alert("name: " + name);
    return false;
}