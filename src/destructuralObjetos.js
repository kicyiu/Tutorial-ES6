const usuario = {
    nombre: 'Alberto',
    correo: 'albertocorreo@gmail.com',
    pais: 'China',
    //profesion: 'Desarrollador Web y Movil'
}

const { nombre, correo, profesion = 'No especificado' } = usuario

const mostrarInfo = ({ nombre, profesion = 'Estudiante', pais, corre }) => console.log(`${nombre} es ${profesion}`);


mostrarInfo(usuario)

