"use strict";
function isLoginValid(login, min = 4, max = 16) {
  return login.length >= min && login.length <= max ? true : false;
  //   if (login.length < min) {
  //     return false;
  //   } else if (login.length > max) {
  //     return false;
  //   }
  //   return true;
}

function isLoginUnique(allLogins, login) {
  return allLogins.includes(login) ? false : true;
  //   if (allLogins.includes(login)) {
  //     return false;
  //   }
  //   return true;
}

function addLogin(allLogins, login) {
  const SUCCESS = "Логин успешно добавлен!";
  const REFUSAL = "Такой логин уже используется!";
  const ERROR = "Ошибка! Логин должен быть размером от 4 до 16 символов";
  let message = "";
  if (isLoginValid(login) === false) {
    message = ERROR;
  } else if (isLoginUnique(allLogins, login) === false) {
    message = REFUSAL;
  } else {
    message = SUCCESS;
    allLogins.push(login);
  }
  return message;
}

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

console.log(addLogin(logins, "1234567890123456"));
// 'Логин успешно добавлен!'
console.log(logins);

console.log(addLogin(logins, "robotGoogles"));
// 'Такой логин уже используется!'

console.log(addLogin(logins, "Zod"));
// 'Ошибка! Логин должен быть от 4 до 16 символов'

console.log(addLogin(logins, "jqueryisextremelyfast"));
// 'Ошибка! Логин должен быть от 4 до 16 символов'
