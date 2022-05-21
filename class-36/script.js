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
