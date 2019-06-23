"use strict";

var usuario = {
  nombre: 'Alberto',
  correo: 'albertocorreo@gmail.com',
  pais: 'China' //profesion: 'Desarrollador Web y Movil'

};
var nombre = usuario.nombre,
    correo = usuario.correo,
    _usuario$profesion = usuario.profesion,
    profesion = _usuario$profesion === void 0 ? 'No especificado' : _usuario$profesion;

var mostrarInfo = function mostrarInfo(_ref) {
  var nombre = _ref.nombre,
      _ref$profesion = _ref.profesion,
      profesion = _ref$profesion === void 0 ? 'Estudiante' : _ref$profesion,
      pais = _ref.pais,
      corre = _ref.corre;
  return console.log("".concat(nombre, " es ").concat(profesion));
};

mostrarInfo(usuario);