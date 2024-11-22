window.addEventListener('load', function() {
    var audioPlayerMenu = document.getElementById('idAudioMenu');  // Música del menú
    var audioPlayerOpinion = document.getElementById('idAudioOpinion');  // Música de la pantalla de opiniones
    var audioPlayerAgencia = document.getElementById('idAudioAgencia');  // Música del escenario "Agencia Espacial"
    var audioPlayerTSA = document.getElementById('idAudioTSA');  // Música del escenario "TOP SECRET AREA"
    var audioPlayerAgroglifos = document.getElementById('idAudioAgroglifos');  // Música del escenario "Agroglifos"

    // Verificar si la música está habilitada desde localStorage
    // var musicEnabled = localStorage.getItem('musicEnabled');
    // if (musicEnabled === 'true') {
    //     // Si la música está habilitada, reproducirla solo si el elemento existe
    //     if (audioPlayerMenu) audioPlayerMenu.play();
    //     if (audioPlayerOpinion) audioPlayerOpinion.play();
    //     if (audioPlayerAgencia) audioPlayerAgencia.play();
    //     if (audioPlayerTSA) audioPlayerTSA.play();
    //     if (audioPlayerAgroglifos) audioPlayerAgroglifos.play();
    // } else {
    //     // Si la música está deshabilitada, pausarla solo si el elemento existe
    //     if (audioPlayerMenu) audioPlayerMenu.pause();
    //     if (audioPlayerOpinion) audioPlayerOpinion.pause();
    //     if (audioPlayerAgencia) audioPlayerAgencia.pause();
    //     if (audioPlayerTSA) audioPlayerTSA.pause();
    //     if (audioPlayerAgroglifos) audioPlayerAgroglifos.pause();
    // }

    // // Establecer volúmenes para las diferentes pistas de audio solo si existen
    // if (audioPlayerMenu) audioPlayerMenu.volume = 0.2;
    // if (audioPlayerOpinion) audioPlayerOpinion.volume = 0.5;
    // if (audioPlayerAgencia) audioPlayerAgencia.volume = 0.6;
    // if (audioPlayerTSA) audioPlayerTSA.volume = 0.8;

    // if (audioPlayerMenu) {
    //     audioPlayerMenu.muted = true;
    //     audioPlayerMenu.play().then(() => {
    //         // Si la reproducción se inicia correctamente, podemos ajustar el volumen
    //         if (localStorage.getItem('musicEnabled') === 'true') {
    //             audioPlayerMenu.muted = false;  // Desmutear si la música está habilitada
    //             audioPlayerMenu.volume = 0.2; // Ajustar el volumen
    //         }
    //     }).catch(error => {
    //         console.log("Error al intentar reproducir la música automáticamente:", error);
    //     });
    // }

    var musicEnabled = localStorage.getItem('musicEnabled');
    if (musicEnabled === 'true') {
        // Si la música está habilitada, reproducirla solo si el elemento existe
        if (audioPlayerMenu) {
            audioPlayerMenu.play();
            audioPlayerMenu.volume = 0.2;
        } 
    } else {
        // Si la música está deshabilitada, pausarla solo si el elemento existe
        if (audioPlayerMenu) {
            audioPlayerMenu.pause();
        } 
    }

    document.body.addEventListener('click', function () { 

        if (audioPlayerOpinion) {
            audioPlayerOpinion.muted = true;
            audioPlayerOpinion.play().then(() => {
                if (localStorage.getItem('musicEnabled') === 'true') {
                    audioPlayerOpinion.muted = false;
                    audioPlayerOpinion.volume = 0.5;
                }
            }).catch(error => {
                console.log("Error al intentar reproducir la música automáticamente:", error);
            });
        }

        if (audioPlayerAgencia) {
            audioPlayerAgencia.muted = true;
            audioPlayerAgencia.play().then(() => {
                if (localStorage.getItem('musicEnabled') === 'true') {
                    audioPlayerAgencia.muted = false;
                    audioPlayerAgencia.volume = 0.6;
                }
            }).catch(error => {
                console.log("Error al intentar reproducir la música automáticamente:", error);
            });
        }

        if (audioPlayerTSA) {
            audioPlayerTSA.muted = true;
            audioPlayerTSA.play().then(() => {
                if (localStorage.getItem('musicEnabled') === 'true') {
                    audioPlayerTSA.muted = false;
                    audioPlayerTSA.volume = 0.8;
                }
            }).catch(error => {
                console.log("Error al intentar reproducir la música automáticamente:", error);
            });
        }

        if (audioPlayerAgroglifos) {
            audioPlayerAgroglifos.muted = true;
            audioPlayerAgroglifos.play().then(() => {
                if (localStorage.getItem('musicEnabled') === 'true') {
                    audioPlayerAgroglifos.muted = false;
                }
            }).catch(error => {
                console.log("Error al intentar reproducir la música automáticamente:", error);
            });
        }
    });
    

    // REPRODUCCION DE LA CANCION DEL MENU EN MÁS DE UNA PESTAÑA SIN REINICIARSE
    if (audioPlayerMenu) {
        // Verificar si hay una posición guardada en localStorage para el audio del menú
        if (localStorage.getItem('audioTime')) {
            audioPlayerMenu.currentTime = localStorage.getItem('audioTime');
        }

        // Guardar la posición del audio del menú cada vez que el tiempo cambie
        audioPlayerMenu.addEventListener('timeupdate', function() {
            localStorage.setItem('audioTime', audioPlayerMenu.currentTime);
        });
    }
});





// window.addEventListener('load', function() {
//     var audioPlayerMenu = document.getElementById('idAudioMenu');  // Musica del menu
//     var audioPlayerOpinion = document.getElementById('idAudioOpinion');  // Musica de la Pantalla de Opiniones
//     var audioPlayerAgencia = document.getElementById('idAudioAgencia');  // Musica del Escenario "Agencia Espacial"
//     var audioPlayerTSA = document.getElementById('idAudioTSA');  // Musica del Escenario "TOP SECRET AREA"

//     if (audioPlayerMenu) {
        
//         // REPRODUCCION DE LA CANCION DEL MENU EN MÁS DE UNA PESTAÑA SIN REINICIARSE

//         // Verificar si hay una posición guardada en localStorage para el audio del menú
//         if (localStorage.getItem('audioTime')) {
//             audioPlayerMenu.currentTime = localStorage.getItem('audioTime');
//         }

//         // Guardar la posición del audio del menú cada vez que el tiempo cambie
//         audioPlayerMenu.addEventListener('timeupdate', function() {
//             localStorage.setItem('audioTime', audioPlayerMenu.currentTime);
//         });

//         audioPlayerMenu.volume = 0.6;
//     }

//     if (audioPlayerOpinion) {
//         audioPlayerOpinion.volume = 0.5;
//     }

//     if (audioPlayerAgencia) {
//         audioPlayerAgencia.volume = 0.6;
//     }

//     if (audioPlayerTSA) {
//         audioPlayerTSA.volume = 0.8;
//     }
// });

