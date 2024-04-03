// Defino la lista de productos disponibles en la tienda. Creo mi array con objetos
const productos = [
  { nombre: "Taza", 
    precio: 20, 
    categoría: "Taza"}, 

  { nombre: "Polo",
    precio: 30, 
    categoría: "Ropa"}, 
  
  { nombre: "Camisa",
     precio: 50, 
     categoría: "Ropa"}, 
  
  { nombre: "Estampa", 
    precio: 5, 
    categoría: "Estampa"}, 
];

// Inicializo el carrito de compras
let carrito = [];

// Pregunto al cliente si desea comprar algún producto
let pregunta = prompt("¡Hola 👋! Bienvenido a Cine Católico. ¿Quieres comprar algo? Responde con 'si' o 'no'.");

// Validamos la respuesta del cliente
while (pregunta.toLowerCase() !== "si" && pregunta.toLowerCase() !== "no") {
  alert("¿Quieres comprar algo? Responde con 'si' o 'no'.");
  pregunta = prompt("¿Quieres comprar algo?  Responde con 'si' o 'no'.");
}

// Si el cliente quiere comprar
if (pregunta.toLowerCase() === "si") {
  // Mostramos la lista de productos disponibles
  let todosProductos = productos.map(producto => `${producto.nombre} - Precio: ${producto.precio} soles`);
  alert("Aquí tienes nuestra lista de productos:\n" + todosProductos.join("\n"));
} else {
  // Si el cliente no quiere comprar, ciaoooo
  alert("¡Está bien! Gracias por visitar la Tienda de Cine Católico ¡Que tengas un buen día 😊!");
}

// Mientras el cliente quiera comprar
while (pregunta.toLowerCase() === "si") {
  // Para agregar un producto al carrito de compras
  let producto = prompt("¿Qué te gustaría agregar a tu carrito de compras?").toLowerCase(); 
  let precio = 0;

  // Verifico si el producto existe 
  switch (producto) {
      case "taza":
          precio = 20;
          break;
      case "polo":
          precio = 30;
          break;
      case "camisa":
          precio = 50;
          break;
      case "estampa":
          precio = 5;
          break;
      default:
          alert("Lo siento 😢, pero no tenemos ese producto en nuestra tienda.");
          continue; 
  }

  // Ingresar la cantidad de unidades 
  let unidades = parseInt(prompt("¿Cuántas unidades deseas comprar?"));

  // Valido si la cantidad ingresada es un número entero positivo
  while (isNaN(unidades) || !Number.isInteger(unidades) || unidades <= 0) {
      alert("Por favor, ingresa un número entero mayor que cero para las unidades.");
      unidades = parseInt(prompt("¿Cuántas unidades deseas comprar?"));
  }

  // Se agrega el producto al carrito 
  carrito.push({ producto, unidades, precio });

  // ¿quiere agregar más productos al carrito?
  let seleccion = prompt("¿Deseas agregar algún otro producto? Responde con 'si' o 'no'.");

  // Si no quiere, salimos del bucle
  if (seleccion.toLowerCase() === "no") {
      break;
  }
}

// Mostramos los detalles de los productos en el carrito y calculamos el total parcial
let mensajeParcial = "Detalles de tu carrito de compras:\n";
carrito.forEach(item => {
  mensajeParcial += `- Producto: ${item.producto} | Cantidad: ${item.unidades} | Precio unitario: ${item.precio} soles | Total parcial: ${item.unidades * item.precio} soles\n`;
});

// Calculamos y mostramos el total a pagar
const total = carrito.reduce((acumulador, elemento) => acumulador + elemento.precio * elemento.unidades, 0);
alert(`${mensajeParcial}\nTotal a pagar: ${total} soles`);
