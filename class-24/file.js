// function concatArrays(array1, array2) {
//   if (Array.isArray(array1) && Array.isArray(array2)) {
//     return array1.concat(array2);
//   }
//   return undefined;
// }

// console.log(concatArrays([1, 2, 3], ["a", "b"]));

// var commonLetters (a, b) {
//     var common = [];
//     for (let index1 = 0; index1 < a.length; index1 ++) {
//         for ( let index2 = 0; index2 < b.length; index2++) {
//         if (a[index1] === b[index2]) {
//            common.push(a[index1])
//         }
//     }
// }

// console.log(commonLetters('abc', 'abds'))

// var a = 10;

// switch (a) {
//   case 10:
//     console.log("this is 10");
//     break;

//   case 20:
//     console.log("this is 20");
//     break;

//   default:
//     console.log("default");
//     break;
// }

["red", "green", "blue", "white", "black"];

function getHexColor(color) {
  switch (color) {
    case "red":
      return "#FF00";

    case "green":
      return "#00ff";

    case "blue":
      return "0000ff";

    case "white":
      return "fff";

    case "black":
      return "000";
  }
}
console.log(getHexColor("red"));


