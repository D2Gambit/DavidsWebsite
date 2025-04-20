function submitForm(e) {
    e.preventDefault();
    var name = document.getElementById("nameInput").value;
    var email = document.getElementById("emailInput").value;
    var number = document.getElementById("numberInput").value;
    console.log("name",name);
    window.alert("name",name);
    return false;
}