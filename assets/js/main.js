class Producto{
    constructor(nombre,precio){
        this.nombre=nombre;
        this.precio=precio;
    } 
}
const Productos=[];
const Agrego=()=>{

    const nombre=document.getElementById("nombre").value.toUpperCase();
    const precio=document.getElementById("precio").value;
   
    if (nombre !== "" && precio!=="" && isNaN!==(precio) && precio>0) {
    const NuevoProducto=new Producto(nombre,precio);
    //const mostrar= `NOMBRE: ${nuevoProducto.nombre}  PRECIO: $ ${nuevoProducto.precio}<br>`;
    //document.getElementById("productos").innerHTML+=mostrar
    Productos.push(NuevoProducto)
    localStorage.setItem("productos",JSON.stringify(Productos));
    const ProductoCard = `<div class="container-tienda"> 
    <div class="card" style="width: 18rem;">
    <img src="./assets/img/imagen.png" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title"> ${NuevoProducto.nombre}</h5>
      <p> Precio: $ ${NuevoProducto.precio}</p>
      <button type="button"onclick="Añadir(${Productos.indexOf(NuevoProducto)})" class="btn btn-primary">Añadir al Carrito</button>
    </div>
    </div>
    </div`;
    
    document.getElementById("nombre").value="";
    document.getElementById("precio").value="";
    document.getElementById("productos").innerHTML += ProductoCard;
    
    }
}
const Compra=()=>{
  alert("¡Gracias por su compra!")
 }
  boton.onclick=()=>{Compra()}
const Añadir=()=>{

 }
  boton.onclick=()=>{Añadir()}
  boton.onclick=()=>{Agrego()}

