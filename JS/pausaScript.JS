// // Lista de URLs que corresponden a escenarios
// const escenarios = [
//     "../Escenarios/Agencia Espacial/index.html",
//     "../Escenarios/TopSecretArea/index.html",
//     "../Escenarios/Acrolifos/index.html"
// ];

// // Función para normalizar las rutas y asegurarse de que se comparen correctamente
// function normalizeUrl(url) {
//     const urlObj = new URL(url, window.location.href);
//     return urlObj.pathname;
// }

// // Función que guarda el último escenario visitado en sessionStorage
// function guardarEscenario() {
//     const referrer = document.referrer; // Obtiene la URL de referencia
//     if (referrer) {
//         const referrerNormalized = normalizeUrl(referrer);
//         const esEscenario = escenarios.some(escenario => referrerNormalized.includes(normalizeUrl(escenario)));
//         if (esEscenario) {
//             sessionStorage.setItem("ultimoEscenario", referrer); // Guardamos la URL del escenario en sessionStorage
//         }
//     }
// }

// // Guardamos el escenario cuando se carga la página de pausa
// guardarEscenario();

// // Función para redirigir al escenario correspondiente (cuando el usuario hace clic en "Reiniciar partida")
// document.getElementById("idReiniciar").addEventListener("click", function() {
//     const ultimoEscenario = sessionStorage.getItem("ultimoEscenario");

//     if (ultimoEscenario) {
//         window.location.href = ultimoEscenario;
//         console.log("Redirigiendo al escenario: " + ultimoEscenario);
//     } else {
//         window.location.href = "inicio.html"; // Si no hay referencia de escenario, redirigir al inicio
//         console.log("No se encontró escenario, redirigiendo al inicio.");
//     }
// });



// CODIGO PARA REDIRIGIRTE A LAS PANTALLAS DE LOS ESCENARIOS 
const escenarios = [
    "../Escenarios/Agencia Espacial/index.html",
    "../Escenarios/TopSecretArea/index.html",
    "../Escenarios/Acrolifos/index.html"
];

// Función para normalizar las rutas y asegurarse de que se comparen correctamente
function normalizeUrl(url) {
    const urlObj = new URL(url, window.location.href);
    return urlObj.pathname;
}

// Función que guarda el último escenario visitado en sessionStorage
function guardarEscenario() {
    const referrer = document.referrer; // Obtiene la URL de referencia
    if (referrer) {
        const referrerNormalized = normalizeUrl(referrer);
        const esEscenario = escenarios.some(escenario => referrerNormalized.includes(normalizeUrl(escenario)));
        if (esEscenario) {
            sessionStorage.setItem("ultimoEscenario", referrer); // Guardamos la URL del escenario en sessionStorage
            const escenario = escenarios.find(e => referrerNormalized.includes(normalizeUrl(e)));
            sessionStorage.setItem("nombreEscenario", escenario); // También guardamos el nombre del escenario
        }
    }
}

// Guardamos el escenario cuando se carga la página de pausa
guardarEscenario();

// CODIGO PARA REANUDAR LA PARTIDA
document.addEventListener('DOMContentLoaded', function () {

    const btnPausa = document.getElementById("btnPausa");

    if (btnPausa) {
        btnPausa.addEventListener("click", function() {
            // Llamamos a la función para guardar el estado antes de redirigir
            guardarPartida();

            // Redirigir a la página de pausa con un pequeño retraso para asegurar que se guarde el estado
            setTimeout(function() {
                window.location.href = "../../Pausa.html";
            }, 500); // Ajusta el tiempo según sea necesario

        });
    } else {
        console.log("El botón de pausa no se encuentra en el documento.");
    }

    const nombreEscenario = sessionStorage.getItem("nombreEscenario"); // Recupera el nombre del escenario

    let scene; // Declaramos la variable 'scene'

    // Asegurarnos de que estamos en uno de los escenarios y asignamos la escena correspondiente
    switch (nombreEscenario) {
        case "../Escenarios/Agencia Espacial/index.html":
            scene = window.agenciaEspacialScene;
            break;
        case "../Escenarios/TopSecretArea/index.html":
            scene = window.TSAScene;
            break;
        case "../Escenarios/Acrolifos/index.html":
            scene = window.acrolifosScene;
            break;
        default:
            console.error("Escenario no encontrado o estamos en la página de pausa.");
            return; // No hacer nada si no estamos en un escenario válido
    }

    // Función para guardar el estado de la partida
    function guardarPartida() {
        const jugador = window.Player1; // Aquí tomamos el jugador global desde window
        const vidaElement = document.getElementById("idVidaPlayer");
        const contadorElement = document.getElementById("idNaveContador");

        if (jugador && vidaElement && contadorElement) {
            const vida = vidaElement.textContent.split(": ")[1];
            const contador = contadorElement.textContent.split(": ")[1];

            // Guardamos el estado en localStorage
            const estadoJuego = {
                posicion: {
                    x: jugador.position.x,
                    y: jugador.position.y,
                    z: jugador.position.z
                },
                vida: vida,
                contador: contador
            };

            localStorage.setItem("estadoJuego", JSON.stringify(estadoJuego));
            console.log("Estado del juego guardado:", estadoJuego);
        } else {
            console.log("Los elementos de vida/contador o el jugador no están presentes, no se guardó el estado.");
        }
    }

    // Solo llamar a guardarPartida() cuando el modelo esté cargado
    if (window.Player1) {
        // Si el modelo ya está cargado, llamamos a guardarPartida directamente
        guardarPartida();
    } else {
        // Si el modelo no está cargado, lo notificamos y esperamos a que esté listo
        console.log("El jugador aún no ha sido cargado, esperaremos a que se cargue...");
        const intervalId = setInterval(function() {
            if (window.Player1) {
                // Una vez cargado, guardamos el estado
                guardarPartida();
                clearInterval(intervalId);  // Limpiamos el intervalo
            }
        }, 300); // Comprobamos cada 300ms si el modelo ya está cargado
    }
    
    document.addEventListener('DOMContentLoaded', function () {
        const continuarBtn = document.getElementById("idContinuar");

        if (continuarBtn) {
            continuarBtn.addEventListener("click", function() {
                cargarPartida();
                console.log("Partida continuada.");
            });
        } else {
            console.log("El botón de 'Continuar' no existe en esta página.");
        }
    });

    // Función para restaurar el estado del juego
    function cargarPartida() {
        const estadoGuardado = JSON.parse(localStorage.getItem("estadoJuego"));

        if (estadoGuardado) {
            console.log("Estado guardado recuperado:", estadoGuardado);

            // Verifica que el jugador y la escena estén listos
            const jugador = window.Player1;

            if (jugador) {
                // Restaurar la posición del jugador
                jugador.position.set(estadoGuardado.posicion.x, estadoGuardado.posicion.y, estadoGuardado.posicion.z);
                console.log("Posición del jugador restaurada.");

                // Restaurar la vida y el contador en el DOM
                const vidaElement = document.getElementById("idVidaPlayer");
                const contadorElement = document.getElementById("idNaveContador");

                if (vidaElement && contadorElement) {
                    vidaElement.textContent = `Vida: ${estadoGuardado.vida}`;
                    contadorElement.textContent = `Contador: ${estadoGuardado.contador}`;
                    console.log("Vida y contador restaurados.");
                } else {
                    console.log("No se encontraron los elementos de vida/contador.");
                }
            } else {
                console.log("Jugador no encontrado en la escena.");
            }
        } else {
            console.log("No se encontró estado guardado.");
        }
    }

    const reiniciarBtn = document.getElementById("idReiniciar");
    if (reiniciarBtn) {
        reiniciarBtn.addEventListener("click", function() {
            const ultimoEscenario = sessionStorage.getItem("ultimoEscenario");

            if (ultimoEscenario) {
                window.location.href = ultimoEscenario; // Redirige al último escenario visitado
                console.log("Redirigiendo al escenario: " + ultimoEscenario);
            } else {
                window.location.href = "inicio.html"; // Si no hay referencia de escenario, redirigir al inicio
                console.log("No se encontró escenario, redirigiendo al inicio.");
            }
        });
    } else {
        console.log("El botón de reiniciar no existe en esta página.");
    }

});

// Función para continuar el juego sin reiniciar el estado
function continuarJuego() {
    const ultimoEscenario = sessionStorage.getItem("ultimoEscenario");

    if (ultimoEscenario) {
        window.location.href = ultimoEscenario; // Redirige al último escenario visitado
        console.log("Redirigiendo al escenario: " + ultimoEscenario);
    } else {
        window.location.href = "inicio.html"; // Si no hay referencia de escenario, redirigir al inicio
        console.log("No se encontró escenario, redirigiendo al inicio.");
    }
}
