let btnCrear = document.getElementById("btnCrear");
let firstName = document.getElementById("nombre-cliente");
let lastName = document.getElementById("apellido-cliente");
let email = document.getElementById("email-cliente");
//let password = document.getElementById("Password");
//let repeatPassword = document.getElementById("RepeatPassword");
let celular = document.getElementById("celular-cliente");
let direccion = document.getElementById("direccion-cliente");
let direccion2 = document.getElementById("direccion2-cliente");
let descripcion = document.getElementById("descripcion-cliente");

btnCrear.addEventListener("click", (e) => {
    e.preventDefault();
    if (!validar()) return;
    guardar();
    limpiar();
    alert("Registro exitoso");
});



function validar() {
    if (!firstName.value.trim() || !lastName.value.trim() || !email.value.trim()) {
        alert("Por favor complete los campos obligatorios.");
        return false;
    }
    if (!/\S+@\S+\.\S+/.test(email.value)) {
        alert("Ingrese un correo electrónico válido.");
        return false;
    }
    return true;
}


function limpiar(){
    firstName.value = "";
    lastName.value = "";
    email.value = "";
    celular.value = "";
    direccion.value = "";
    direccion2.value = "";
    descripcion.value = "";
}

let guardar = async () => {
    let usuario = {
        nombre: firstName.value,
        apellido: lastName.value,
        email: email.value,
        celular: celular.value,
        direccion: direccion.value,
        direccion2: direccion2.value,
        descripcion: descripcion.value
    };
    console.log(usuario);
    let url = "http://localhost/backend-apicrud/index.php?url=clientes";
    try {
        let response = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(usuario)
        });

        if (!response.ok) {
            throw new Error('Error en la petición: ' + response.status);
        }

        let data = await response.json();
        console.log(data);

        limpiar();
        alert("Registro exitoso");

    } catch (error) {
        console.error('Hubo un problema con el fetch:', error);
        alert("No se pudo guardar el registro. Intente nuevamente.");
    }
};



