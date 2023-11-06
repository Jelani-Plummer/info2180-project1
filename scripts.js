/* Add your JavaScript to this file */
window.onload = function () {
    var format = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var email = document.getElementById("email");
    var msg = document.getElementsByClassName("message")[0];
    var submit = document.getElementsByTagName("button")[0];

    submit.addEventListener("click", function (e) {
        e.preventDefault();
        if (email.value === "" || !(email.value.match(format))) 
        {
            msg.innerHTML = "Please enter a valid email address.";
            email.value = "";
        } 
        else 
        {
            msg.innerHTML = "Thank you! Your email address " + email.value + " has been added to our mailing list";
        }
    });
};