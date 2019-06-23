"use strict";

var texto = 'Hola Mundo';
console.log(texto, 'empieza con h:', texto.toLowerCase().startsWith('h'));
console.log(texto, 'termina con o:', texto.toLowerCase().endsWith('o'));
console.log(texto, 'incluye la palabra yangyang:', texto.toLowerCase().includes('yangyang'));
var amigos = ['Carlos', 'Cesar', 'Alejandro', 'Manuel'];
console.log(amigos.includes('Alejandro')); //Devuelve primer elemento que cumple una condicion;

console.log(amigos.find(function (amigo) {
  return amigo.length > 6;
})); //Devuelve primer index que cumple la condicion

console.log(amigos.findIndex(function (amigo) {
  return amigo === 'Alejandro';
}));