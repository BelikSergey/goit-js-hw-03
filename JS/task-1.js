"use strict";
let message = "";
const user = {
  age: 20,
  hobby: "html",
  name: "Mango",
  premium: true,
};
user.mood = `happy`;
user[`full time`] = true;
user.hobby = "skydiving";
user.premium = false;

//Write code under this line

const keys = Object.keys(user);
// Write code under this line
for (const key of keys) {
  let property = ``;
  property = `${key} : ${user[key]} \n`;
  message += property;
  // console.log(message);
}

// console.log(keys);
console.log(message);
/*
'age : 20
hobby : skydiving
name : Mango
premium : false
mood : happy
"full time" : true
' */
