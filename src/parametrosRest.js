const mostrarDatos = (...datos) => {
    const [ nombre, , correo, pais ] = datos
    console.log(datos);
    console.log(pais);
}

mostrarDatos('Carlos', 23, 'correo@correo.com', 'Mexico');