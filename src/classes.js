class Usuario {

    constructor(nombre, edad, correo) {
        this.nombre = nombre,
        this.edad = edad,
        this.correo = correo;
    }

    mostrarSaludo(mensaje) {
        return mensaje;
    }

    mostrarInfo() {
        return `
            <b>Nombre:</b> ${this.nombre} <br/>
            <b>Edad:</b> ${this.edad} <br/>
            <b>Correo:</b> ${this.correo} <br/>
            <hr />
        `;
    }
}


class Estudiante extends Usuario {

    constructor(nombre, edad, carrera) {
        super(nombre, edad) //ejecuta constructor de la superclase
        this.carrera = carrera;
    }

    mostrarInfo() {
        return `
            <b>Nombre:</b> ${this.nombre} <br/>
            <b>Edad:</b> ${this.edad} <br/>
            <b>Correo:</b> ${this.carrera} <br/>
            <hr />
        `;
    }
}

const persona = new Usuario('Alberto', 34, 'correo@correo.com');
document.write(persona.mostrarInfo());

const persona2 = new Estudiante('Alejandro', 36, 'Ingeniero Informatico');
document.write(persona2.mostrarInfo());