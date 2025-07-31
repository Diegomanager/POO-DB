class Usuario {
    #contrasena;
    
    constructor(nombre, contrasena) {
        this.nombre = nombre;
        this.#contrasena = contrasena;
    }

    verificarContrasena(contrasenaIngresada) {
        return this.#contrasena === contrasenaIngresada;
    }

    encriptarContrasena() {
        // Aquí podrías implementar un método de encriptación si fuera necesario
        return this.#contrasena.split('').reverse().join(''); // Ejemplo simple de "encriptación"
    }
    desencriptarContrasena(contrasenaEncriptada) {
        return contrasenaEncriptada.split('').reverse().join('');
    }
}

const usuario1 = new Usuario("Alan", "1234");

console.log(usuario1.verificarContrasena("1234")); // true
console.log(usuario1.verificarContrasena("abcd")); // false
console.log(usuario1); // Usuario { nombre: 'Alan', #contrasena: '1234' }
console.log(usuario1.contrasena); // Error: Cannot access private field #contrasena from outside the class
console.log(usuario1.encriptarContrasena()); // Error: Private field '#encriptarContrasena' must be declared in an enclosing class
console.log(usuario1.desencriptarContrasena(usuario1.encriptarContrasena())); // 1234

