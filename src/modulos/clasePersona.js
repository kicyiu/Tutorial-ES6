class Persona {

    constructor(nombre, edad) {
        this.nombre = nombre,
        this.edad = edad;
    }

    mostrarInfo() {
        console.log(`${this.nombre} 是 ${this.edad} 岁`);
    }
}


export default Persona;