//Variables
let agregarNota;
let tituloNota;
let textoNota;
let temaNota;
let notas = [];

//Escuchar a mi ventanna cuando realice una acción
//cargar...

window.addEventListener('load', inicializar, true);

function inicializar(){
    agregarNota = document.getElementById('agregar-nota');
    tituloNota = document.getElementById('titulo-nota');
    textoNota = document.getElementById('texto-nota');
    temaNota = document.getElementById('tema-nota');
    contenedor=document.querySelector('.right');
    //querySelector clases, id, etiquetas h2 h1 p div
    //querySelectorAll más de 1 div

//botón agregar nota
    agregarNota.addEventListener('click',addNota,true);
}

function addNota(){
    //objeto
    nuevaNota = {
        titulo:tituloNota.value,
        texto:textoNota.value,
        tema:temaNota.value,
    };
    //Agregar una nueva nota al array "notas"
    notas.push(nuevaNota);

    contenedor.innerHTML+="<div class='nota "+ nuevaNota.tema+"'><h2>"+nuevaNota.titulo+"</h2><p>"+nuevaNota.texto+"</p></div>"
}