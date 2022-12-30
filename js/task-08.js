
const loginFrom = document.querySelector('.login-form');

loginFrom.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        return alert("Please fill in all the fields!");
    }

    const result = { Email: `${email.value}`, Password: `${password.value}` };
    console.log(result);
  event.currentTarget.reset();
};