const form = document.getElementById("signup");
const nameInput = document.getElementById("name");
const surnameInput = document.getElementById("surname");
const passwordInput = document.getElementById("password");
const dateInput = document.getElementById("birthdate");

const isEmpty = (input, errorId) => {
  if (input.value === "") {
    document.getElementById(errorId).textContent = "Please input empty field";
  } else {
    document.getElementById(errorId).textContent = "";
  }
};

hasMinCharacters = () => {
  if (input.value.length <= min.length) {
    document.getElementById(errorId).textContent = "4 characters minimum";
  } else {
    document.getElementById(errorId).textContent = "";
  }
};

const valid = (input, errorId) => {
  let valid = false;
  const exist = isEmpty(input, errorId);
  switch (input.id) {
    case "name":
      const hasMin = hasMinCharacters(input, errorId, 4);
      valid = exist && hasMin;
      break;
    case "surname":
      const hasMin2 = hasMinCharacters(input, errorId, 4);
      valid = exist && hasMin2;
      break;
    case "password":
      const hasMin3 = hasMinCharacters(input, errorId, 8);
      valid = exist && hasMin3;
      break;
    case "date":
  }
  return valid;
};

const submitFunction = (event) => {
  event.preventDefault;
  const nameValid = exist(nameInput, errorName);
  const surnameValid = exist(nameInput, errorSurname);
  const passwordValid = exist(nameInput, errorPassword);
  const dateValid = exist(nameInput, errorDate);
};
form.addEventListener("submit", submitFunction());
