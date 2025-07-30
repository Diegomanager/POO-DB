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
            console.log(`${cantidad} unidad(es) de ${producto.nombre} añadidas al carrito.`);
        } else {
            console.log(`No hay suficiente stock de ${producto.nombre}. Stock disponible: ${producto.cantidadEnStock}`);
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
        console.log("Contenido del carrito:");
        this.productos.forEach(item => {
            console.log(`- ${item.producto.nombre} x${item.cantidad} = $${item.producto.precio * item.cantidad}`);
        });
        console.log(`Total: $${this.calcularTotal()}`);
    }
}



// Crear algunos productos
const producto1 = new Producto("Camiseta", 20, 10);
const producto2 = new Producto("Pantalón", 40, 5);
const producto3 = new Producto("Zapatos", 60, 3);

// Crear carrito
const miCarrito = new Carrito();

// Agregar productos al carrito
miCarrito.agregarProducto(producto1, 2); // Camiseta x2
miCarrito.agregarProducto(producto2, 1); // Pantalón x1
miCarrito.agregarProducto(producto3, 4); // Intento fallido (stock insuficiente)

// Mostrar resumen del carrito
miCarrito.mostrarCarrito();



