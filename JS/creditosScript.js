var btnCreadores = document.getElementById("btnCreadores");
var btnModelos = document.getElementById("btnModelos");
var btnIconos = document.getElementById("btnIconos");
var btnAudio = document.getElementById("btnAudio");
var btnHUD = document.getElementById("btnHUD");

var listaCreadores = document.getElementById("listaCreadores");
var listaModelos = document.getElementById("listaModelos");
var listaIconos = document.getElementById("listaIconos");
var listaAudio = document.getElementById("listaAudio");
var listaHUD = document.getElementById("listaHUD");

function mostrarLista(listaParaMostrar) {
    listaCreadores.style.display = 'none';
    listaModelos.style.display = 'none';
    listaIconos.style.display = 'none';
    listaAudio.style.display = 'none';
    listaHUD.style.display = 'none';

    listaParaMostrar.style.display = 'flex';
}

btnCreadores.addEventListener('click', () => mostrarLista(listaCreadores));
btnModelos.addEventListener('click', () => mostrarLista(listaModelos));
btnIconos.addEventListener('click', () => mostrarLista(listaIconos));
btnAudio.addEventListener('click', () => mostrarLista(listaAudio));
btnHUD.addEventListener('click', () => mostrarLista(listaHUD));

mostrarLista(listaCreadores);