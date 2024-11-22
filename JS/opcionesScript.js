
window.addEventListener('load', function() {
    var checkboxMusic = document.getElementById('checkboxMusic'); // El checkbox para controlar la música
    var audioPlayerMenu = document.getElementById('idAudioMenu'); // La música del menú
    var audioPlayerOpinion = document.getElementById('idAudioOpinion'); // Música de la pantalla de opiniones
    var audioPlayerAgencia = document.getElementById('idAudioAgencia'); // Música del escenario "Agencia Espacial"
    var audioPlayerTSA = document.getElementById('idAudioTSA'); // Música del escenario "TOP SECRET AREA"

    // Verificar si el estado de la música está guardado en localStorage
    if (localStorage.getItem('musicEnabled') === 'true') {
        // Si la música está habilitada, marcar el checkbox y reproducir la música
        checkboxMusic.checked = true;
        audioPlayerMenu.play();
        audioPlayerOpinion.play();
        audioPlayerAgencia.play();
        audioPlayerTSA.play();
    } else {
        // Si la música está deshabilitada, desmarcar el checkbox y pausar la música
        checkboxMusic.checked = false;
        audioPlayerMenu.pause();
        audioPlayerOpinion.pause();
        audioPlayerAgencia.pause();
        audioPlayerTSA.pause();
    }

    // Escuchar el cambio en el checkbox para controlar la música
    checkboxMusic.addEventListener('change', function() {
        if (checkboxMusic.checked) {
            // Si el checkbox está marcado, reproducir todas las músicas y guardar el estado
            audioPlayerMenu.play();
            audioPlayerOpinion.play();
            audioPlayerAgencia.play();
            audioPlayerTSA.play();
            localStorage.setItem('musicEnabled', 'true');
        } else {
            // Si el checkbox no está marcado, pausar todas las músicas y guardar el estado
            audioPlayerMenu.pause();
            audioPlayerOpinion.pause();
            audioPlayerAgencia.pause();
            audioPlayerTSA.pause();
            localStorage.setItem('musicEnabled', 'false');
        }
    });
});

