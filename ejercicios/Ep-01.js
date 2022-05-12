
///Tipos de varibles///

//-Numerico (number)
let myNumber = 5;
let miDecimal = 1.33;

//- Texto (String)
let myName = 'neryad'
let myName2 = "neryad"

//- booleano (bollean)
let isTrue = true;
let isFalse = false;

//- indefindido (undefined)
	let isUndefined;


//- Nulo (null)

let isNull = null;
//Mode de escirutra en JS camelCase
function getDataFromUser


///Operadores///
//let num1 = 5;
//let num2 =6;
//Aritmeticos//

//-Suma +
	// let num1 = 5;
	// let num2 = 6;

	// console.log(num1 + num2);

//-Resta -
  //console.log(num1 - num2);

//-Resta *
  //console.log(num1 * num2);

//-Resta /
  //console.log(num1 / num2);

//TypeOf//
	// console.log(typeof num2);

//Booleanos//

//-Negacion
//let isTrue = true;
// console.log(!isTrue);
//let isFalse = false;
// console.log(!isFalse);

//-Iguladad
 //let num = 5;
 //let stringNum = 5;
 true === true; // true
 true === false; // false
 true !== false; // true
 true !== true; // false
// console.log( num !== stringNum);

//-Comparacion

5 > 3
5 < 3
3 >= 3
4 <= 2

//- lógicos
 //AND &&
true && true
true && false
false && false

// OR ||
true || true
true || false
false || true
false || false

/// Condicionles ///
let num = 5;
let num2 = 6;
// - IF
if(num == num2){
    console.log('son iguales');

  }

// - if / else

if(num == num2){
    	console.log('son iguales');

  }  else {
    console.log('no son iguales');
  }

// - else if

if(num == num2){
    	console.log('son iguales');

  } else if ( num2 > num) {
     console.log('es mayor');
  } else {
    console.log('no son iguales');
  }



//Switch
let color = 'Verde';
switch(color){
  case 'Azul':
    console.log('Es Azul');
    break;
     case 'Verde':
    console.log('Es Verde');
    break;
     case 'Amarillo':
    console.log('Es Amarillo');
    break;
     case 'Negro':
    console.log('Es Negro');
    break;
     case 'Morado':
    console.log('Es Morado');
    break;
     case 'Rojo':
    console.log('Es Rojo');
    break;
     case 'Aqua':
    console.log('Es Aqua');
    break;
  default:
    console.log('no es ninguno');

}

/// Object ///

let streamer = {
name:'vamosACoder',
lenguge:'JS',
age: 25,
height: 5.6,
loveAngular:false,
platforms:['youtbe', 'twitc', 33],
addres : {
  stree:'calle arriba',
  aparment:'3b'
},
  sayHi: function (){
    let num = 5;
    let num2 = 6;
    console.log(num + num2)
  }



}

streamer.sayHi()

/// Anidación ///

let libro = {

  titulo: 'Aprediendo javascript',

  autor: {
    nombre: 'Carlos Azaustre',
    nacionalidad:'espanola'
  },

  editorial:{
   nombre:'carlosazaustre',
  	web:'tulibro.com',
    addrees:{
      stree:'asdasd',
      apartament:'3b'
    }

  },

  fecha:'20/03/2021',

}

/// Igualcion Objectos ///
	const pc1 = {marca:'Dell2', Modelo:'Latitud'}
  const pc2 = {marca:'Dell', Modelo:'Latitud'}

  pc1 === pc2
  pc1.marca === pc2.marca
  const pc3 = pc1
  pc1 === pc3

	if( pc1.marca === pc2.marca){
    	console.log('son marcas iguales')
  } else {
    console.log('no son marcas iguales')
  }

/// Number///

//-parseInt
// parseInt('hola');
// parseInt('111');
// console.log('111')

//-parsefloat
// parseFloat("fffff");

function circumference(r) {
  return parseFloat(r) * 2.0 * Math.PI;
}

// console.log(circumference(4.564534))

let n2 = 2.56788;
n2.toFixed(2)

//-.toExponential
let n = 3.56788;
// n.toExponential(2)

//-.toString

(1111).toString();

/// Math ///

Math.PI;
Math.E
Math.random();
Math.pow(2,6);
Math.min(45,200,1,5);
Math.max(45,200,1,5);
Math.floor(6.4)
Math.ceil(6.4)
Math.round(6.7)