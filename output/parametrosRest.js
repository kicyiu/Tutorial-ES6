"use strict";

var mostrarDatos = function mostrarDatos() {
  for (var _len = arguments.length, datos = new Array(_len), _key = 0; _key < _len; _key++) {
    datos[_key] = arguments[_key];
  }

  var nombre = datos[0],
      correo = datos[2],
      pais = datos[3];
  console.log(datos);
  console.log(pais);
};

mostrarDatos('Carlos', 23, 'correo@correo.com', 'Mexico');