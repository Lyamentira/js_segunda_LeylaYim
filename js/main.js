// Definir la lista de productos disponibles en la tienda. Creo mi array con objetos
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
  
  // Función para mostrar la lista de productos disponibles. 
  // Función: mostrarProductos
  function mostrarProductos() {
    // Mensaje con los nombres y precios de los productos
    let todosProductos = productos.map(producto => `${producto.nombre} - Precio: ${producto.precio} soles`);
    alert("Aquí tienes nuestra lista de productos:\n" + todosProductos.join("\n"));
  }
  
  // Función para agregar un producto al carrito de compras
  // Función: agregarAlCarrito
  
  function agregarAlCarrito(producto, unidades) {
    // Busco el producto en la lista de productos
    const productoEnLista = productos.find(item => item.nombre.toLowerCase() === producto.toLowerCase());
    // Si el producto existe en la lista
    if (productoEnLista) {
      // Agrego el producto al carrito con la cantidad y precio correspondientes
      carrito.push({ producto: productoEnLista.nombre, unidades, precio: productoEnLista.precio });
    } else {
       alert("Lo siento 😢, pero no tenemos ese producto en nuestra tienda.");
    }
  }
  
  
  // Función para mostrar el contenido del carrito
  // Función: mostrarCarrito
  function mostrarCarrito() {
    let mensajeParcial = "Detalles de tu carrito de compras:\n";
    carrito.forEach(item => {
      mensajeParcial += `- Producto: ${item.producto} | Cantidad: ${item.unidades} | Precio unitario: ${item.precio} soles | Total parcial: ${item.unidades * item.precio} soles\n`;
    });
    return mensajeParcial;
  }
  
  // Función para calcular el total del carrito
  // Función: calcularTotal
  function calcularTotal() {
    return carrito.reduce((total, item) => total + item.precio * item.unidades, 0);
  }
  
  // Inicializo el carrito de compras
  let carrito = [];
  
  // Pregunto al cliente si desea comprar algún producto
  let pregunta = prompt("¡Hola 👋! Bienvenido a Cine Católico. ¿Quieres comprar algo? Responde con 'si' o 'no'.").toLowerCase();
  
  // Valido la respuesta del cliente
  while (!(pregunta === "si" || pregunta === "no")) {
    alert("¿Quieres comprar algo? Responde con 'si' o 'no'.");
    pregunta = prompt("¿Quieres comprar algo?  Responde con 'si' o 'no'.").toLowerCase();
  }
  
  // Si quiere comprar, muestro la lista de productos disponibles
  if (pregunta === "si") {
    mostrarProductos();
  } else {
    alert("¡Está bien! Gracias por visitar la Tienda de Cine Católico ¡Que tengas un buen día 😊!");
  }
  
  // Mientras el cliente quiere comprar
  while (pregunta === "si") {
    // Muestro la lista de productos disponibles y pregunto qué producto desea agregar al carrito
    let opcionesProductos = productos.map(producto => producto.nombre).join(", ");
    let producto = prompt(`¿Qué te gustaría agregar a tu carrito de compras? Productos disponibles: ${opcionesProductos}`).toLowerCase();
  
    // Verifico si el producto está en la lista de productos
    if (productos.some(item => item.nombre.toLowerCase() === producto)) {
      // Si el producto es válido, solicito la cantidad
      let unidades = parseInt(prompt("¿Cuántas unidades deseas comprar?"));
      // Valido si la cantidad ingresada es un número entero positivo
      while (isNaN(unidades) || !Number.isInteger(unidades) || unidades <= 0) {
        alert("Por favor, ingresa un número entero mayor que cero para las unidades.");
        unidades = parseInt(prompt("¿Cuántas unidades deseas comprar?"));
      }
      // Agrego el producto al carrito con la cantidad pedida.
      agregarAlCarrito(producto, unidades);
    } else {
      alert("Por favor, selecciona un producto válido de la lista.");
    }
  
    // ¿Quiere agregar más productos al carrito?
    let seleccion = prompt("¿Deseas agregar algún otro producto? Responde con 'si' o 'no'.").toLowerCase();
    // Valido la respuesta del cliente.
    while (!(seleccion === "si" || seleccion === "no")) {
      alert("¿Deseas agregar algún otro producto? Responde con 'si' o 'no'.");
      seleccion = prompt("¿Deseas agregar algún otro producto? Responde con 'si' o 'no'.").toLowerCase();
    }
    // Si no quiere, salimos del bucle
    if (seleccion === "no") {
      break;
    }
  }
  
  // Mostrar los detalles de los productos en el carrito y calcular el total a pagar
  const mensajeParcial = mostrarCarrito();
  const total = calcularTotal();
  alert(`${mensajeParcial}\nTotal a pagar: ${total} soles`);
  