window.addEventListener("load", function () {
    document.getElementById("preloader").style.display = "none";

    document.querySelectorAll(".hidden").forEach(el => {
        el.classList.add("show");
    });
});

document.getElementById("sello").addEventListener("click", function () {
    document.getElementById("left_graph").classList.add("fade-out");
    document.getElementById("right_graph").classList.add("fade-out");
    document.getElementById("env_middle").classList.add("fade-out");
    document.getElementById("env_top").classList.add("fade-out");
    document.getElementById("inner_elements").classList.add("fade-out");

    // Opcional: Puedes ocultar la pantalla de bienvenida completamente si quieres
    setTimeout(() => {
        document.getElementById("pre-page").style.display = "none";
        document.getElementById("content-page").style.display = "block"; // Mostramos el contenido
    }, 500);  // Esperar un poco para las animaciones antes de esconder todo
});

let fecha = new Date("06/21/2025");
let msFecha = fecha.getTime();
let hoy = new Date();

let parrafoDias = document.querySelector("#dias");
let parrafoHoras = document.querySelector("#horas");
let parrafoMinutos = document.querySelector("#minutos");
let parrafoSegundos = document.querySelector("#segundos");

setInterval(() => {
    let hoy = new Date().getTime();

    let distancia = msFecha - hoy;

    let msPorDia = 1000 * 60 * 60 * 24;
    let msPorHora = 1000 * 60 * 60;
    let msPorMinuto = 1000 * 60;
    let msPorSegundo = 1000;

    let dias = Math.floor(distancia / msPorDia);
    let horas = Math.floor((distancia % msPorDia) / msPorHora);
    let minutos = Math.floor((distancia % msPorHora) / msPorMinuto);
    let segundos = Math.floor((distancia % msPorMinuto) / msPorSegundo);

    parrafoDias.innerText = dias < 10 ? `0${dias}` : dias;
    parrafoHoras.innerText = horas < 10 ? `0${horas}` : horas;
    parrafoMinutos.innerText = minutos < 10 ? `0${minutos}` : minutos;
    parrafoSegundos.innerText = segundos < 10 ? `0${segundos}` : segundos;

}, 1000)
