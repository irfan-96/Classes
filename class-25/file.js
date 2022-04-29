// var a = { name: "Irfan", surname: "Ugljanin" };
// var aKeys = Object.keys(a);

// if (a["name"]) {
//   console.log("A objekat sadrzi property address");
// }

// const objekat = {
//     name: 'Irfan',
//     surname: 'Ugljanin'
//     address: {
//         street: 'Osmana Dervisnurevica'
//         number: '20'
//         city: 'Novi Pazar'
//     }
//     friends: ['Suad', 'Daris']
// }

// objekat.fullName = `${objekat.name} ${objekat.surname}`;

// var nizKorisnika = [{ name: "irfan" }, { name: "suad" }, { name: "nikola" }];

// for (let i = 0; i < nizKorisnika.length; i++) {
//   const objekat = nizKorisnika[i];

//   if (element.name === "suad") {
//     console.log(element);
//   }
// }

// function findObject(niz, parametar, vrednostParametra) {
//     for (let i = 0; i < nizKorisnika.length; i++) {
//         const korisnik = niz[i];

//         if (korisnik[parametar] === vrednostParametra) {
//             return objekat
//         }
// }
// findObject(nizKorisnika, "name", "suad");

// function sum(n) {
//   var s = 0;
//   for (let i = 1; i <= n; i++) {
//     s += i;
//   }
//   return s;
// }

// function sumR(n) {
//   var sum = 0;
//   if (n === 1) {
//     return 1;
//   }

//   sum = n + sumR(n - 1);
//   return sum;
// }

// function productR(n) {
//   var sum = 1;
//   if (n === 1) {
//     return 1;
//   }

//   sum = n + productR(n - 1);
//   return sum;
// }

// function countdown(n) {
//   if (n === 1) {
//     return 1;
//   }

//   var string = ` ${n} ${countdown(n - 1)}`;
//   return string;
// }

// function range(a, b) {
//   if (a === b) {
//     return b;
//   }
//   var string = `${a}, ${range(a + 1, b)}`;
//   return string;
// }

// console.log(range(2, 5
//   ));

const sum = (...args) => {
  let tempSum = 0;

  for (let index = 0; index < args.length; index++) {
    const element = args[index];

    if (typeof element === "number") {
      tempSum += element;
    }

    if (typeof element === "string") {
      // let value
      // if(Object.is(+element, NaN)){
      //   value = 0
      // } else{
      //   value = +element
      // }
      tempSum += Object.is(+element, NaN) ? 0 : +element;
    }
  }

  return tempSum;
};

console.log(sum(1, 2, 3, 4, 5, 6, "1123 sdfsd"));
