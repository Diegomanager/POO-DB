// Clase Producto
class Producto {
    constructor(nombre, precio, cantidadEnStock) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidadEnStock = cantidadEnStock;
    }

    descontarStock(cantidad) {
        if (cantidad <= this.cantidadEnStock) {
            this.cantidadEnStock -= cantidad;
            return true;
        } else {
            return false;
        }
    }
}

// Clase Carrito
class Carrito {
    constructor() {
        this.productos = []; // [{ producto, cantidad }]
    }

    agregarProducto(producto, cantidad) {
        if (producto.descontarStock(cantidad)) {
            this.productos.push({ producto, cantidad });
            return { exito: true };
        } else {
            return {
                exito: false,
                mensaje: `No hay suficiente stock de ${producto.nombre}. Stock disponible: ${producto.cantidadEnStock}`
            };
        }
    }

    calcularTotal() {
        let total = 0;
        this.productos.forEach(item => {
            total += item.producto.precio * item.cantidad;
        });
        return total;
    }

    mostrarCarrito() {
        const lista = document.getElementById("lista-carrito");
        lista.innerHTML = "";

        this.productos.forEach(item => {
            const li = document.createElement("li");
            li.textContent = `${item.producto.nombre} x${item.cantidad} = $${item.producto.precio * item.cantidad}`;
            lista.appendChild(li);
        });

        document.getElementById("total").textContent = this.calcularTotal();
    }
}

// Crear productos
const productos = [
    new Producto("Camiseta", 20, 10),
    new Producto("Pantalón", 40, 5),
    new Producto("Zapatos", 60, 3)
];

// Crear carrito
const miCarrito = new Carrito();

function agregarAlCarrito() {
    const productoSeleccionado = document.getElementById("producto").value;
    const cantidad = parseInt(document.getElementById("cantidad").value);
    const mensaje = document.getElementById("mensaje");
    mensaje.textContent = "";

    const producto = productos[productoSeleccionado];
    const resultado = miCarrito.agregarProducto(producto, cantidad);

    if (resultado.exito) {
        miCarrito.mostrarCarrito();
    } else {
        mensaje.textContent = resultado.mensaje;
    }
}
