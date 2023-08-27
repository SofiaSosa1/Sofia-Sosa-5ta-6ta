const usuarioCorrecto = "usuario008";
const contraseñaCorrecta = "arcoiris123";

function iniciarSesion() {
    let usuario = document.getElementById("usuario").value;
    let contraseña = document.getElementById("contraseña").value;

    let administrador = "Eres el administrador";
    let noAdministrador = "No eres el administrador";

    if (usuario == usuarioCorrecto && contraseña == contraseñaCorrecta) {
        localStorage.setItem("administrador", administrador);
    } else if (usuario == "" || contraseña == "") {
        alert("No ha ingresado nada ")
    } else {
        localStorage.setItem("administrador", noAdministrador);
    }
    document.getElementById("usuario").value = ""
    document.getElementById("contraseña").value = ""

}

let botoniniciarsesion = document.getElementById("botoniniciarsesion");

botoniniciarsesion.onclick = (e) => {
    e.preventDefault()
    iniciarSesion()
}