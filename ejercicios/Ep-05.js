///Express mas Socket.io

const { connect } = require("http2");

// const express = require('express');
// const app = express();
// const http = require('http');
// const server = http.createServer(app);
// const { Server } = require("socket.io");
// const io = new Server(server);

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });

// io.on('connection', (socket) => {
//   console.log('a user connected');
// });

// server.listen(3000, () => {
//   console.log('listening on *:3000');
// });

///Promesas

// let myPromise = new Promise((resolve,reject) => {

//   // setTimeout(() => {
//   //   resolve(console.log('resolver'));
//   // }, 2000);

//   // setTimeout(() => {
//   //   reject(console.log('reject'));
//   // }, 2000);




// })

// myPromise.then(
//   (resolve) => {`resolve`},
//   (reject) => {`reject`}
// )

// function displayer(some){
//   console.log(some,'some');
// }

// let myPromise = new Promise((resolve,reject) => {

//   let x = 2;

//   if(x == 0){
//     resolve('ok');
//   } else {
//     reject('error');
//   }
// });

// myPromise.then(
//   function(value) {displayer(value);},
//   function(error) {displayer(error);}
// );

///AJAX
// const xhr = new XMLHttpRequest();
// function reqHandler(){
//   if(xhr.readyState == 4 && xhr.status == 200){
//     console.log(xhr.responseText);
//   }
// }

// xhr.onload() = reqHandler;
// xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
// xhr.send();

///Fecht
// fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
//   return response.json();
// }).catch((error) => {
//   console.log(error);
// }
// );

///Lo nuevo de JS v6+
//Arrow Functions
//  const saludar = function () {
//    return console.log('Hola');
//  }

//  const saludar2 = () => console.log('Hola');
// let valor = 2;
//  //-Template String
//  console.log("hola" + " " + "mundo" + " " + valor);
//  console.log(`hola mundo ${valor}`);

///Modulos

class Coche{
  constructor(name, type){

    this.name = name;
    this.type = type;
  }
  start(){
    console.log(`Arrancando ${this.name}`);
  }
}

export default Coche;