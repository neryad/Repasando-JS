//Bucles

let i = 1;

// while (i < 11) {
//   console.log(i);
//   i++;
// }

///DowHile

// do {
//   console.log(i);
//   i++;
// } while (i < 11);

//-For
// const obj = {
//   unArray: new Array(100),
// };

// exampleArr = [1, 2, 4, 5, 5, 78, 56, 45, 345, 45, 45, 45];

// for (let i = 0; i < exampleArr.length; i++) {
//   console.log((obj.unArray[i] = 'hola'));
//   console.log(exampleArr.length);
// }

//-ForEach
// const arr = [1, 2, 3, 4];

// arr.forEach(function (element, index) {
//   console.log(`valor: ${element} esta en la posición ${index}`);
// });

// const pato = {
//   title: 'duck',
//   juego: 'minecraft',
//   ultimaVezJugado: '2020-05-05',
//   casaEnPeligro: true,
// };

// const props = Object.getOwnPropertyNames(pato);

// props.forEach(function (names) {
//   let valor = Object.getOwnPropertyDescriptor(pato, names).value;
//   console.log(`La propiedad ${names} tiene de valor ${valor}`);
// });

//-ForIn
// for (const key in object) {
//   if (Object.hasOwnProperty.call(object, key)) {
//     const element = object[key];

//   }
// }

// const vamosACodear = {
//   name: 'noe',
//   framework: 'react',
//   hasTwitter: true,
//   hasTwitch: true,
// };
// const newArrr = Object.keys(vamosACodear);

///Propuesta de ivanMey para usaar el obj como arreglo
//  for (let prop in vamosAcodear) {
//    console.log(vamosAcodear[prop]);
//  }
//  const newArray = Object.keys(vamosAcodear);
//  newArray.map((e) => e[i]);

// for (let prop in vamosACodear) {
//   console.log(`propiedad: ${prop} contienen el valor: ${vamosACodear[prop]}`);
// }

//JSON
//javascritp object notation

// const vamosACodear = {
//   name: 'noe',
//   framework: 'react',
//   hasTwitter: true,
//   hasTwitch: true,
//   whereSheLives: {
//     country: 'argentina',
//     city: 'buenos aires',
//     street: 'calle falsa',
//   },
//   interests: ['javascript', 'nodejs', 'React.js'],
// };

// console.log(vamosACodear.whereSheLives);
// let jsonSerialized = JSON.stringify(vamosACodear.whereSheLives);
// console.log(jsonSerialized);
// let jsonParsed = JSON.parse(jsonSerialized);
// console.log(jsonParsed);

//AJAX

//- XMLHttpRequest
// const xhr = new XMLHttpRequest();

// function reqHandler() {
//   if (xhr.readyState === 4 && xhr.status === 200) {
//     console.log(xhr.responseText);
//   }
// }

// xhr.onLoad = reqHandler;
// xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
// xhr.send();

//Fetch

// fetch('https://jsonplaceholder.typicode.com/users')
//   .then((response) => {
//     return response.json();
//   })
//   .then((hola) => {
//     hola.forEach((element) => {
//       console.log(element);
//     });
//   });

// const headers = new Headers();
// headers.append('Content-Type', 'application/json');
// headers.append('Accept', 'application/json');
// headers.append('Access-Control-Allow-Origin', '*');

// fetch('https://jsonplaceholder.typicode.com/users', {
//   headers: headers,
//   method: 'POST',
//   mode: 'cors',
//   cache: 'default',
//   body: JSON.stringify({ vamosACodear }),
// });
