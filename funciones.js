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
    msj=document.querySelector('.msj');
    //querySelector clases, id, etiquetas h2 h1 p div
    //querySelectorAll más de 1 div

//botón agregar nota
    agregarNota.addEventListener('click',addNota,true);
}

function addNota(){
    if(tituloNota.value!="" && textoNota.value!=""){
//objeto
nuevaNota = {
    titulo:tituloNota.value,
    texto:textoNota.value,
    tema:temaNota.value,
};
//Agregar una nueva nota al array "notas"
notas.push(nuevaNota);

contenedor.innerHTML+="<div class='nota "+ nuevaNota.tema+"'><div class= 'eliminar' id="+(notas.length-1)+">x</div><h2>"+nuevaNota.titulo+"</h2><p>"+nuevaNota.texto+"</p></div>"


    }else{
        msj.classList.add('mostrar')
        setTimeout(function(){
            msj.classList.remove('mostrar')
        },3000)
    }

    eliminar=document.querySelectorAll('.eliminar');
for(let i=0; i<notas.length;i++){
    eliminar[i].addEventListener('click', eliminarNota, true)
  
    }

}

function eliminarNota(){
    console.log("CLICK", event.target.id)
    notas.splice(event.target.id,1)
    document.getElementById(event.target.id).parentElement.remove();
}