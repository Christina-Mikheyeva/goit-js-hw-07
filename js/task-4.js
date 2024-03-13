const submit = document.querySelector(".login-form");
submit.addEventListener("submit", submitAction)

function submitAction(event) {
    event.preventDefault()

    const { email, password } = event.target.elements;

    const clientEmail = email.value.trim();
    const clientPassword = password.value.trim();

    if ( clientEmail === "" || clientPassword === "") {
    alert ('All form fields must be filled in')
    }

    const form = {
      email: clientEmail,
      password: clientPassword
    }

    console.log(form);
    event.target.reset()
}


// Decoration

const button = document.querySelector("button");
button.textContent = "Log in"