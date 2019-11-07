const persona = ['Yun', 28, 'China', 'Desarrollador Web y Movil'];

const [nombre, , pais, profesion, idioma = 'No especificado'] = persona;

const mostrarInfo = (dato) => {
    console.log(dato)
}

console.log(profesion);