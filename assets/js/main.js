class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

function tiendaForm() {
    let nombre = document.getElementById("nombre").value.toUpperCase();
    let precio = document.getElementById("precio").value;

    if (nombre !== "" && precio !== "" && isNaN !== (precio) && precio > 0) {
        return true;
    } else {
        alert("Revise si en campos estan vacios,si en precio hay letras o si hay numeros negativos")
    }
}

let cont = 0;
let listaProd = [];
function card() {
   
    if (localStorage.getItem("productos") == null) {
        listaProd=[ {nombre: "REMERA", precio: 2000 }, { nombre: "CAMPERA", precio: 15000 }, { nombre: "PANTALON", precio: 3000 }, ];
        getProdu();
    } else {
        listaProd = JSON.parse(localStorage.getItem("productos"));
    }

    let mostrarCarta = "";
    const cartasProdu = document.getElementById("productos");
    listaProd.forEach((producto, index) => {
        mostrarCarta += `<div class="card" id="producto${index}" style="width: 18rem;">
      <img src="./assets/img/imagen.png" class="card-img-top" alt="...">
      <div class="card-body">
      <h5 class="card-title">${producto.nombre}</h5>
      <p class="card-text">$ ${producto.precio}</p>
      <button id="bAñadir${index}" type="button" class="btn btn-primary" >Añadir Carrito</button>
      </div>
      </div>`;
        cont = index
    });

    cartasProdu.innerHTML = mostrarCarta;
    let Carrito;
    if (localStorage.getItem("carrito") == null) {
        Carrito = [];
    } else {
        Carrito = JSON.parse(localStorage.getItem("carrito"));
    }

    for (let i = 0; i < cont + 1; i++) {
        let bAñadir = document.getElementById("bAñadir" + i);
        bAñadir.onclick = (e) => {
            e.preventDefault()
            listaProd = JSON.parse(localStorage.getItem("productos"));
            let producto = new Producto(listaProd[i].nombre, listaProd[i].precio);
            Carrito .push(producto);
            localStorage.setItem("carrito", JSON.stringify(Carrito));
        }
    }
}

document.onload = card();

if (localStorage.getItem("administrador") == "Eres el administrador") {
    const FormAdmin = document.getElementById("formularioAdmin")
    const BotonCerrar = document.getElementById("CerrarSesion");
    let formProd = "";
    formProd += ` <div  id="formAdmin">
        <form id="productForm"action class="form2tienda">
        <h2 id="producto">Nuevo producto</h2>
        <div class="form-group">
        <label>Nombre</label><br>
            <input  type="name"id="nombre"class="form-control" none="name" placeholder="Ingrese Nombre">
        </div>
        <div class="form-group">
            <label >Precio</label><br>
            <input type="name"id="precio"class="form-control" none="name" placeholder="Ingrese Precio">
            </div>
        <br>
        <button  id="boton" type="submit" class="btn btn-outline-dark" >Enviar</button>
        </form>
        </div>`;

    let bCerrarSesion = "";
    FormAdmin.innerHTML = formProd;
    bCerrarSesion += '<button type="button" id="botonCerrarSesion"  class="btn btn-secondary">Cerrar Sesión</button>';
    BotonCerrar.innerHTML = bCerrarSesion;
}

function agregar() {
    if (tiendaForm() == true) {
        let nombre = document.getElementById("nombre").value.toUpperCase();
        let precio = document.getElementById("precio").value;

        if (localStorage.getItem("productos") == null) {
            listaProd = [{ nombre: "REMERA", precio: 2000 }, { nombre: "CAMPERA", precio: 15000 }, { nombre: "PANTALON", precio: 3000 }, ];
        } else {
            listaProd = JSON.parse(localStorage.getItem("productos"))
        }

        let prod = new Producto(nombre, precio);
        listaProd.push(prod);
        localStorage.setItem("productos", JSON.stringify(listaProd));
        card();
        document.getElementById("nombre").value = "";
        document.getElementById("precio").value = "";
    }
}
async function getProdu(){
    try{
        let api=document.getElementById("productos")
        let response=await fetch("https://fakestoreapi.com/products?limit=4");
        response= await response.json()
        response.forEach((producto,index) => {
            api.innerHTML+=`
            <div class="card" id="producto${index}"  style="width: 18rem;">
        <img src="${producto.image}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title-api">${producto.title.toUpperCase()}</h5>
        <p class="card-text-price">$ ${producto.price}</p>
        <button id="bAñadir${index}" type="button" class="btn btn-primary" >Añadir Carrito</button>
        </div>
        </div>`
      cont = index
    let ListaApi={
        nombre:producto.title,
        precio:producto.price,
    }
    listaProd.push(ListaApi)
    localStorage.setItem("productos",JSON.stringify(listaProd))
        });
       
    }catch(error){
        console.log(error);
    }
}

let boton = document.getElementById("boton");

boton.onclick = (e) => {          
    e.preventDefault()
    tiendaForm()
    agregar()
}

let noAdministrador = "No eres el administrador";
let BotonCerrar = document.getElementById("botonCerrarSesion");
let Form = document.getElementById("formAdmin");

BotonCerrar.onclick = (e) => {
    e.preventDefault();
    document.getElementById("formularioAdmin").removeChild(Form);
    document.getElementById("CerrarSesion").removeChild(BotonCerrar);
    localStorage.setItem("administrador", noAdministrador);
}