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

objekat.fullName = `${objekat.name} ${objekat.surname}`;

var nizKorisnika = [{ name: "irfan" }, { name: "suad" }, { name: "nikola" }];

for (let i = 0; i < nizKorisnika.length; i++) {
  const objekat = nizKorisnika[i];

  if (element.name === "suad") {
    console.log(element);
  }
}

function findObject(niz, parametar, vrednostParametra) {
    for (let i = 0; i < nizKorisnika.length; i++) {
        const korisnik = niz[i];
      
        if (korisnik[parametar] === vrednostParametra) {
            return objekat
        }
}
findObject(nizKorisnika, "name", "suad");
