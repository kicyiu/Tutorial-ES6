"use strict";

var nombres = ["Alberto", "Willy", "Tito", "Amilkar", "Jose R"];
var numero_caracteres = nombres.map(function (nombre) {
  return "".concat(nombre, " tiene ").concat(nombre.length, " carateres");
});
var numero_caracteres2 = nombres.map(function (nombre) {
  return "".concat(nombre, " tiene ").concat(nombre.length, " carateres");
});
console.log(numero_caracteres);
console.log(numero_caracteres2);