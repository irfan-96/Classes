/*
const users = [
  { id: 1, name: "Irfan", age: 25 },
  { id: 2, name: "Nikola", age: 19 },
  { id: 3, name: "Hamza", age: 18 },
];

// const filteredUsers = users.filter((user, index) => {
//   return user.age < 20;
// });

// Array.prototype.newFilter = function (callback) {
//   //   const newArray = [];

//   //   const arrayClone = [...this];

//   //   for (let i = 0; i < arrayClone.length; i++) {
//   //     const element = arrayClone[i];
//   //     if (callback(element, i, this)) {
//   //       newArray.push(element);
//   //     }
//   //   }
//   //   return newArray;

//

//   });
// };

Array.prototype.newFind = function (callback) {
  for (let i = 0; i < this.length; i++) {
    const element = this[i];
    if (callback(element, i, this)) {
      return element;
    }
  }

  return undefined;
};

const foundUsers = users.newFind((user, index) => {
  return user.name === "Irfan";
});
// const filteredUsers = users.newFilter((user, index) => {
//   return user.age < 20;
// });

console.log(foundUsers);
*/
// const array = [
//   {
//     id: 1,
//     name: "Suad",
//     address: { street: "Hotkovo", number: 22 },
//   },
//   {
//     id: 2,
//     name: "Irfan",
//     address: { street: "Banja", number: 22 },
//   },
//   {
//     id: 3,
//     name: "Ramiz",
//     address: { street: "Potok", number: 22 },
//   },
//   {
//     id: 4,
//     name: "Ahmed",
//     address: { street: "Hadzet", number: 22 },
//   },

//   {
//     id: 5,
//     name: "Samil",
//     address: { street: "Rasadnik", number: 22 },
//   },
// ];

// // const newArray2 = array
// //   .filter((user) => user.name[0] === "S")
// //   .map((user) => user.name);

// console.log(newArray);

// Array.prototype.newMap = function (callback) {
//   let arr = [];
//   for (let index = 0; index < this.length; index++) {
//     const element = this[index];
//     arr.push(callback(element, index, this));
//   }
//   return arr;
// };

// const newArray = array
//   .filter((user) => user.address.number > 25)
//   .map((user) => user.adress);

// const newArray2 = array.reduce((previous, current, index, array) => {
//   if (current.address.number > 25) {
//     previous.push(value.address);
//   }
//   return previous;
// }, []);

Array.prototype.newReduce = function (callback, initialValue) {
  let result = initialValue ? initialValue : this[0];

  for (let index = 0; index < this.length; index++) {
    const element = this[index];

  if (initialValue) {
    result = callback(result, element, index, this);
    continue;
  }
   if(!initialValue && index === 0 ) {
     continue;
  }
  result = callback(result, element, index, this);

  return result;
};

[1, 2, 3, 4].newReduce((result, value) => result + value);
