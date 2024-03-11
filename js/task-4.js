const submit = document.querySelector(".login-form");
submit.addEventListener("submit", submitAction)

function submitAction(event) {
    event.preventDefault()

    const {email, password} = event.target.elements;

    const clientEmail = email.value;
    const clientPassword = password.value;

    if ( clientEmail === "" || clientPassword === "") {
    alert ('All form fields must be filled in')
}
}




    


