///-Arrya-[Arreglos]

//let miArray = [];
// let miArray = new Array();
let numberArray = [1, 3, 5, 7, 10];
let stringArray = ['hola', 'danny', 'martin'];
let objArrya = [{ name: 'neryad' }, { name: 'jerivas' }];
let randomArrya = ['asd', 23, { name: 'papolo' }];
// Se inicia a contar desde cero
// console.log(numberArray);
// console.log(stringArray.length)

///-Arrya-Metodos
// console.log(numberArray.sort());
// console.log(numberArray.pop());
// console.log(numberArray.push(15));
// console.log(numberArray);
// console.log(numberArray.reverse());

// let filter = numberArray.filter( function (el){
//    return el >= 5;
// });
// console.log(filter,'filter');
// console.log(numberArray);
// numberArray.slice(2,3);

///-String

'Neryad'[2];
'Neryad'.length;
'Neryad'.charCodeAt(2);
'Neryad'.indexOf('yad');
'Neryad'.substring(2, 4);

function diHola() {
  return 'hola';
}

function diHola2(name) {
  //return "hola" + " " + name;
  return `hola ${name}`;
}

const adios = function () {
  return 'adios';
};
adios();
diHola();
diHola2('eduardo');

function greettings(type, user) {
  let tipo = type || 'hola';
  let usuario = user || 'vampirowski';
  return `${tipo} ${usuario}`;
}
// greettings('martin','buena seurte');

function greettings2(type = 'hola', user = 'vampirowski') {
  return `${type} ${user}`;
}
// greettings2('martin2','buena seurte');

var valor = 'global';

function localfunction() {
  var valor = 'local';

  return valor;
}
console.log(valor);
console.log(localfunction());
console.log(valor);

///-anidadas

const a = 'klok';

function global() {
  let b = 'Que paso?';

  function local() {
    let c = 'nada';

    return `${a} ${b} ${c}`;
  }
  return local;
}

global()();

///-Como Objetos

const diHola = function (usuario) {
  return `hola ${usuario}`;
};

diHola('jujodev');

///- closure

const miContador = (function () {
  let _contador = 0;

  function aumentar() {
    return _contador++;
  }

  function restar() {
    return _contador--;
  }

  function valor() {
    return _contador;
  }
  return {
    aumentar: aumentar,
    restar: restar,
    valor: valor,
  };
})();
miContador.aumentar();
miContador.restar();
miContador.valor();

///-Como Clases

// function Almacen(nombre) {
//   this.nombre = nombre;
//   this.articulos = {};

//   this.add = function (nombre, cantidad) {
//     this.articulos[nombre] = cantidad;
//   };
//   this.nombre = function () {
//     return this.nombre;
//   };

//   this.cantidad = function (nombre) {
//     return (this.articulos[nombre] = nombre);
//   };
// }

// const libros = new Almacen('Libro');
// libros.add('Aprdiendo JS');
// libros.cantidad('Aprdiendo JS');

///-proto

// function Almacen(nombre) {
//   this.nombre = nombre;
//   this.articulos = {};
// }

// Almacen.prototype = {
//   add: function (nombre, cantidad) {
//     this.articulos[nombre] = cantidad;
//   },

//   cantidad: function (nombre) {
//     return this.articulos[nombre];
//   },

//   nombre: function () {
//     return this.nombre;
//   },
// };

// const libros = new Almacen('libro');

// libros.add('martin y su vida en el lago', 3);
// libros.nombre();
