class Estudiante {
    constructor(nombre, apellido, edad, curso) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.curso = curso;
    }

    mostrarNombreCompleto() {
        console.log(`Nombre completo: ${this.nombre} ${this.apellido}`);
    }
}

const estudiante1 = new Estudiante("Juan", "Pérez", 20, "Matemáticas");
const estudiante2 = new Estudiante("María", "Gómez", 22, "Historia");

estudiante1.mostrarNombreCompleto();
estudiante2.mostrarNombreCompleto();