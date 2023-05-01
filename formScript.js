const rightUsername = "Max";
const rightPassword = "789456123";

function formValidation() {
  let usernameInput = document.getElementById("username");
  let passwordInput = document.getElementById("password");

  resetStyle(usernameInput);
  resetStyle(passwordInput);
  const username = usernameInput.value;
  const password = passwordInput.value;

  if (username === "admin" && password === "123") {
    alert("Connected Successfully!");
    return true
  } else if (password.length < 6) {
    alert("Password must be at least 6 characters");
    wrongInput(passwordInput);
    return false;
  } else if (username !== rightUsername || password !== rightPassword) {
    alert("Wrong username or password");
    if (username !== rightUsername) {
      wrongInput(usernameInput);
    } else if (password !== rightPassword) {
      wrongInput(passwordInput);
    }

    return false;
  }
  alert("Connected Successfully!");
  return true;
}

function resetStyle(element) {
  element.style.border = "1px solid black";
  element.style.backgroundColor = "white";
}

function wrongInput(element) {
  element.style.border = "1px solid red";
  element.style.backgroundColor = "red";
}
