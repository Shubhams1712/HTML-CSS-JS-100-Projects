let generateBtn = document.getElementById('generate-password');
let outputPassword = document.getElementById('password');

generateBtn.addEventListener("click", () => {
  let input = document.getElementById('password-input');
  let passLength = parseInt(input.value);

  if (passLength <= 0 || input.value === "") {
    outputPassword.innerHTML = `Please enter length of password.`;
    return;
  } else if (isNaN(passLength)) {
    outputPassword.innerHTML = `Please enter length of password.`;
  }


  let pool = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:,.<>?";

  let password = "";
  for (let i = 0; i < passLength; i++) {
    password += pool.charAt(Math.floor(Math.random() * pool.length));
  }
  outputPassword.innerHTML = password;
});