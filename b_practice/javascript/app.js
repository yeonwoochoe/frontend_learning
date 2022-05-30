const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");

function onLoginSubmit() {
  const username = loginInput.value;
  console.log(username);
  // if (username === "") {
  //   alert("Please write your name");
  // } else if (username.length > 15) {
  //   alert("Your name is too long");
  // }
}

loginForm.addEventListener("submit", onLoginSubmit);
