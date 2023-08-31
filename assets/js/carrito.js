let bFinalizar = document.getElementById("botonFinalizar");
let bVaciar = document.getElementById("botonVaciar");

if (localStorage.getItem("carrito") == null) {
    document.getElementById("botonesCarrito").removeChild(bFinalizar);
    document.getElementById("botonesCarrito").removeChild(bVaciar);
}

let Carrito = [];

function card() {
    Carrito = JSON.parse(localStorage.getItem("carrito"));
    let mostrarCarta = "";
    const cartasProdu = document.getElementById("carrito");
    Carrito.forEach((producto, index) => {
        mostrarCarta += `<div class="card" id="producto${index}" style="width: 18rem;">
            <img src="./assets/img/imagen.png" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${producto.nombre}</h5>
            <p class="card-text">$${producto.precio}</p>
            </div>
            </div>`;
        cont = index;
    });

    cartasProdu.innerHTML = mostrarCarta;
}

document.onload = card();

function borrarCarrito() {

    for (let i = 0; i < cont + 1; i++) {
        let producto = document.getElementById("producto" + i);
        document.getElementById("carrito").removeChild(producto);
    }

    localStorage.removeItem("carrito");
    document.getElementById("botonesCarrito").removeChild(bFinalizar);
    document.getElementById("botonesCarrito").removeChild(bVaciar);
}


bFinalizar.onclick = (e) => {
    e.preventDefault()
    Swal.fire('¡Gracias por su compra!')
    borrarCarrito()
}

bVaciar.onclick = (e) => {
    e.preventDefault()
    borrarCarrito()
}