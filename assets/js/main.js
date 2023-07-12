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
    //const mostrar= `NOMBRE: ${NuevoProducto.nombre}  PRECIO: $ ${NuevoProducto.precio}<br>`;
    //document.getElementById("productos").innerHTML+=mostrar
    Productos.push(NuevoProducto)

    localStorage.setItem("productos", JSON.stringify(Productos));
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
    else{
      alert("Revise que campos esten llenos, que en precio no ingrese letras o precios negativos ")
    }
  
}
boton.onclick=()=>{Agrego()}

 /*const Eliminar=()=>{
  
  }
  boton.onclick=()=>{Eliminar()}*/
 
  
  function IniciarSesion(){
    const usuario=document.getElementById("usuario").value;
    const contraseña=document.getElementById("contraseña").value;

    if (usuario !== "" && contraseña!=="") {

    document.getElementById("usuario").value="";
    document.getElementById("contraseña").value="";

    }
 }
 
  IniciarSesion()
  
function Añadir(){
  
}
Añadir()
function Compra(){
  alert("¡Gracias por su compra!")
 }
 Compra()