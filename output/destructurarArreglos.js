"use strict";

var persona = ['Yun', 28, 'China', 'Desarrollador Web y Movil'];
var nombre = persona[0],
    pais = persona[2],
    profesion = persona[3],
    _persona$ = persona[4],
    idioma = _persona$ === void 0 ? 'No especificado' : _persona$;

var mostrarInfo = function mostrarInfo(dato) {
  console.log(dato);
};

console.log(profesion);