//Evento
const target = document.querySelector('#hola');
const header = document.querySelector('header');
// - Propagación de eventos

// header.addEventListener('click', function (event) {
//   console.log(`has hecho click en ${event.target.nodeName}`);
// });



// target.addEventListener('click', function (event) {
//   console.log('event en el docuemnto');
// });

// - Patron PubSub

// const pubsub = (function () {

//   const subscriptores = {};

//   function EventObject() {};

//   function subscribe(event, callback){

//     if(!subscriptores.event){
//       const subscriptoresArray = [callback];
//       subscriptores[event] = subscriptoresArray;
//     } else {
//       subscriptores[event].push(callback);
//     }


//   }

//   function publish(event, data){
//     const eventObject = new EventObject();
//     eventObject.type = event;
//     if(data){
//       eventObject.data = data;
//     }
//     if (subscriptores[event]) {
//       subscriptores[event].forEach(function (callback) {
//         callback(eventObject);
//       });
//     }

//   }

//   return {
//     pub: publish,
//     sub: subscribe
//   }

// })();

// pubsub.sub('nuesroEvento', function (e) {
//   console.log('nuestro evento , mi datos son:', e.data.datos);
// });

// pubsub.pub('nuesroEvento', {datos:'datos'});

//DOM
//- Recorriendo el DOM

///- getElementyById('') devuelve un elemento con un id;
///- getElementyByName('name') devuelve un elemento con un name;
///- getElementyByTagName('tag') devuelve un elemento con un tag;
///- getElementyByclassName('class') devuelve los elemento que contenga esa clase;
///- getAtribute  Devuelve el valor del atributo con nombre attributeName;
///- querySelector('.clase | #id | tag | name') devuelve el primer elemento que cumpla la condición;
///- querySelectorAll() devuelve un array con todos los elementos que cumplan la condición;

// - Manipulando el DOM

///- CreateElement('') crea un elemento con el tag indicado;
///- createTextNode('') crea un nodo de texto;
///-  creaTextAttribute('') crea un atributo de texto;
///- appendChild('') añade un elemento hijo al elemento padre;
///- removeChild('') elimina un elemento hijo del elemento padre;
///- replaceChild('') reemplaza un elemento hijo por otro;
///- insertBefore('') inserta un elemento antes de otro;

////EX
// let main =document.querySelector('#main');
// const newDiv = document.createElement('div');
// newDiv.id="newDiv";
// newDiv.className="newDiv";
// newDiv.style="background-color:red; width:100px; height:100px;";
// main.appendChild(newDiv);

// - Propiedades de los nodos del DOM
/// - attributes - devuelve un objeto con todos los atributos del elemento;
/// - childNodes - devuelve un array con todos los nodos hijos del elemento;
/// - firstChild - devuelve el primer nodo hijo del elemento;
/// - lastChild - devuelve el último nodo hijo del elemento;
/// - nextSibling - devuelve el siguiente nodo hijo del elemento;
/// - previousSibling - devuelve el nodo anterior del elemento;
/// - parentNode - devuelve el nodo padre del elemento;
/// - textContent - devuelve el texto contenido en el nodo;
/// - innerHTML - devuelve el HTML contenido en el nodo;
/// - outerHTML - devuelve el HTML completo del nodo;
/// - nodeType - devuelve el tipo de nodo;
/// - nodeName - devuelve el nombre del nodo;
/// - id - devuelve el id del nodo;
/// - className - devuelve la clase del nodo;
/// - tagName - devuelve el nombre del tag del nodo;

////EX :
let main =document.querySelector('#main');
const newDiv = document.createElement('div');
newDiv.id="newDiv";
newDiv.className="newDiv";
newDiv.style="background-color:red; width:100px; height:100px;";
newDiv.innerHTML = 'soy el innerHTML';
main.appendChild(newDiv);
const newDiv2 = document.createElement('div');
newDiv.id = 'newDiv2';
newDiv.className = 'newDiv';
newDiv.style = 'background-color:red; width:100px; height:100px;';
newDiv.innerHTML = 'soy el innerHTML';


main.appendChild(newDiv2);
const newDiv3 = document.createElement('div');
newDiv.id = 'newDiv3';
newDiv.className = 'newDiv';
newDiv.style = 'background-color:red; width:100px; height:100px;';
newDiv.innerHTML = 'soy el innerHTML';


main.appendChild(newDiv3);


console.log(main.nodeName);

//Importacion de la clase choce del Ep-05
import Coche from "./Ep-05";
let chevrolet = new Coche("chevrolet", "camaro");
chevrolet.arrancar();