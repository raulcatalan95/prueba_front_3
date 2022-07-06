let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let correo = document.getElementById("correo");
let telefono = document.getElementById("telefono");
let marca = document.getElementById("marca");
let rut = document.getElementById("rut");
let color = document.getElementById("color")
let formFormluario = document.getElementById("form-formulario");


formFormluario.addEventListener("submit",(e)=>{
    let validarNombre;
    let validarApellido;
    let validarCorreo;
    let validarRut;
    let validarTelefono;
   

    // validar que tengas mas de 3 caracteres
   validarNombre =  nombre.value.length > 3 ? true  : alert("el nombre debe tener mas de 3 caracteres");
   validarApellido =  apellido.value.length > 3 ? true  : alert("el apellido debe tener mas de 3 caracteres");
   validarCorreo =  correo.value.length > 3 ? true  : alert("el correo debe tener mas de 3 caracteres");
   
    //arrayRut = rut.value.split("")
     rutGuion = rut.value.includes("-")
     rutPunto = rut.value.includes(".")
     if(rutGuion && (rut.value.length == 9 || rut.value.length == 10)&& rutPunto == false){
        validarRut = true
     }else{
        alert("rut incorrecto es con guion y sin punto")
     }

     telefonoGuion =telefono.value.includes("-");
     telefonoMas = telefono.value.includes("+");
     if(telefono.value[0] != "9" || telefonoGuion || telefonoMas || telefono.value.length != 9 ){
        alert("el telefono es sin guion y sin mas aparte debe empezar con 9");
     }else{
        validarTelefono = true
     }

     if(validarApellido && validarCorreo && validarNombre && validarRut && validarTelefono){
       alert(nombre.value+" - "+apellido.value+" - "+rut.value+" - "+telefono.value+" - "+correo.value+" - "+marca.value+" - "+color.value+" - ")
         return true
         alert("todo correcto")
     }else{
        e.preventDefault()
         return false
     }




     
     

    //;
    //alert("hola")

    
})
