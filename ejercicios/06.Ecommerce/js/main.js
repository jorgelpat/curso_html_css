const contenedorProductos = document.querySelector(".contenedor-productos");

contenedorProductos.innerHTML = ""; // por seguridad

productos.forEach(producto => {
    const div = document.createElement("div");
    div.classList.add("producto");

    div.innerHTML = `
        <img class="producto-imagen" src="${producto.imagen}" alt="">
        <div class="producto-detalles">
            <h3 class="producto-titulo">${producto.nombre}</h3>
            <p class="producto-precio">$${producto.precio}</p>
            <button class="producto-agregar">Agregar</button>
        </div>
    `;

    contenedorProductos.appendChild(div);
});
