//variables globales de admin
const d = document;
let nameUser = d.querySelector("#nombre-usuario");
let btnLogout = d.querySelector("#btnLogout");

d.addEventListener("DOMContentLoaded", () =>{
    getUser();
})

//funcion para poner el nombre del usuario
let getUser = () => {
    let user = JSON.parse(localStorage.getItem("usuario"));
    nameUser.textContent = user.usuario;
    if (rol) {
        rol.textContent = user.rol;
    }
    
};

//evento para el boton del logout
btnLogout.addEventListener("click", () =>{
    localStorage.removeItem("usuario");
    location.href = "../login.html";
});

export {getUser};