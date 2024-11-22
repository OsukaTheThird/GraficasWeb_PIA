window.addEventListener('load', function() {
    var checkboxMusic = document.getElementById('checkboxMusic'); // El checkbox para controlar la música
    var audioPlayerMenu = document.getElementById('idAudioMenu'); // La música del menú
    var audioPlayerOpinion = document.getElementById('idAudioOpinion'); // Música de la pantalla de opiniones
    var audioPlayerAgencia = document.getElementById('idAudioAgencia'); // Música del escenario "Agencia Espacial"
    var audioPlayerTSA = document.getElementById('idAudioTSA'); // Música del escenario "TOP SECRET AREA"
    var audioPlayerAgroglifos = document.getElementById('idAudioAgroglifos');  // Música del escenario "Agroglifos"

    // Verificar si el estado de la música está guardado en localStorage
    if (localStorage.getItem('musicEnabled') === 'true') {
        // Si la música está habilitada, marcar el checkbox y reproducir la música
        checkboxMusic.checked = true;
    } else {
        // Si la música está deshabilitada, desmarcar el checkbox y pausar la música
        checkboxMusic.checked = false;
    }

    // Escuchar el cambio en el checkbox para controlar la música
    checkboxMusic.addEventListener('change', function() {
        if (checkboxMusic.checked) {
            // Si el checkbox está marcado, reproducir todas las músicas y guardar el estado
            if (audioPlayerMenu) audioPlayerMenu.play();
            if (audioPlayerOpinion) audioPlayerOpinion.play();
            if (audioPlayerAgencia) audioPlayerAgencia.play();
            if (audioPlayerTSA) audioPlayerTSA.play();
            if (audioPlayerAgroglifos) audioPlayerAgroglifos.play();
            localStorage.setItem('musicEnabled', 'true');
        } else {
            // Si el checkbox no está marcado, pausar todas las músicas y guardar el estado
            if (audioPlayerMenu) audioPlayerMenu.pause();
            if (audioPlayerOpinion) audioPlayerOpinion.pause();
            if (audioPlayerAgencia) audioPlayerAgencia.pause();
            if (audioPlayerAgroglifos) audioPlayerAgroglifos.pause();
            localStorage.setItem('musicEnabled', 'false');
        }
    });
});
