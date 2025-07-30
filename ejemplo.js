// Definición de una clase
class Persona {
    // Constructor
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    // Método
    saludar() {
        console.log(`¡Hola! Mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    }
    cumplirAños() {
        this.edad ++;
        console.log(`Felicidades loco ${this.nombre} Ahora tienes ${this.edad} años.`);
    }
}

// Definición de la clase Estudiante que hereda de Persona
class Estudiante extends Persona {
    constructor(nombre, edad, carrera) {
        super(nombre, edad); // Llama al constructor de la clase base
        this.carrera = carrera;
    }

    mostrarCarrera() {
        console.log(`${this.nombre} está estudiando ${this.carrera}.`);
    }
}

class Docente extends Persona {
    constructor(nombre, edad, materia) {
        super(nombre, edad); // Llama al constructor de la clase base
        this.materia = materia;
    }

    mostrarMateria() {
        console.log(`${this.nombre} enseña ${this.materia}.`);
    }
    
    presentarse() {
        console.log(`Hola, soy ${this.nombre}, tengo ${this.edad} años y enseño ${this.materia}.`);
    }
}


class automovil {
    constructor(marca, velocidad, color) {
        this.marca = marca;
        this.velocidad = velocidad;
        this.color = color;
    }

    acelerar() {
        this.velocidad += 2;
        console.log(`El ${this.marca} de color ${this.color}, tiene esta velocidad ${this.velocidad} km/h.`);
    }
    detenerse() {
        this.velocidad = 0;
        console.log(`El ${this.marca} de color ${this.color}, se ha detenido y su velocidad es ${this.velocidad} km/h.`);
    }
}

class autodeportivo extends automovil {
    constructor(marca, velocidad, color, modelo, puertas) {
        super(marca, velocidad, color); // Llama al constructor de la clase base
        this.modelo = modelo;
        this.puertas = puertas;
    }

   turbo() {
        this.velocidad = this.velocidad * 2;
        console.log(`El ${this.marca} de color ${this.color}, modelo ${this.modelo}, ha activado el turbo y ahora va a ${this.velocidad} km/h. DIABLO LOCO `) ;
    }

    mostrarModelo() {
        console.log(`El modelo del auto es ${this.modelo} de color ${this.color} y tiene ${this.puertas} puertas.`);
    }


}
// Creación de un objeto

/*const persona = new Persona("Luis", 25);
persona.saludar();
persona.cumplirAños(); persona.cumplirAños();


const Diego = new Estudiante("Diego", 20, "Ingeniería");
Diego.saludar();
Diego.mostrarCarrera();     
Diego.cumplirAños(); Diego.cumplirAños();

const ana = new Docente("Ana", 40, "Matemáticas");   
ana.saludar();
ana.mostrarMateria();
ana.presentarse();

const auto1 = new automovil("Toyota supra", 120, "Rojo");
auto1.acelerar();
auto1.acelerar();
auto1.acelerar();
auto1.acelerar();
auto1.detenerse();
*/

const auto2 = new autodeportivo("McLaren", 200, "Verde", "720S", 2);
auto2.acelerar();
auto2.acelerar();
auto2.acelerar();
    
auto2.turbo();  
auto2.mostrarModelo();
auto2.detenerse();