// FUNCION PARA QUE TE REGRESE A LA PANTALLA CORRESPONDIENTE (Eje: pausa.html)
function ventanaAnterior() {
    if (document.referrer) {
        // Si la página de referencia existe, regresar a esa página
        window.location.href = document.referrer;
    } else {
        // Si no hay una página de referencia, redirigir al inicio por defecto
        window.location.href = 'inicio.html';
    }
}

window.addEventListener('load', function () {
    // MUSICA
    var checkboxMusic = document.getElementById('checkboxMusic'); // El checkbox para controlar la música
    var audioPlayerMenu = document.getElementById('idAudioMenu'); // La música del menú
    var audioPlayerOpinion = document.getElementById('idAudioOpinion'); // Música de la pantalla de opiniones
    var audioPlayerAgencia = document.getElementById('idAudioAgencia'); // Música del escenario "Agencia Espacial"
    var audioPlayerTSA = document.getElementById('idAudioTSA'); // Música del escenario "TOP SECRET AREA"
    var audioPlayerAgroglifos = document.getElementById('idAudioAgroglifos');  // Música del escenario "Agroglifos"
    // EFECTOS DE SONIDO
    var checkboxSound = document.getElementById('checkboxSound'); // El checkbox para controlar los efectos de sonido
    var soundPlayerGanar= document.getElementById('idAudioGanar');  // Efecto de sonido al ganar
    var soundPlayerPerder = document.getElementById('idAudioPerder');  // Efecto de sonido al perder
    var soundPlayerRecord = document.getElementById('idAudioRecord');  // Efecto de sonido al batir un record

    // --------------------------- MUSICA ----------------------------------

    // Verificar si el estado de la música está guardado en localStorage
    if (localStorage.getItem('musicEnabled') === 'true') {
        // Si la música está habilitada, marcar el checkbox y reproducir la música
        checkboxMusic.checked = true;
    } else {
        // Si la música está deshabilitada, desmarcar el checkbox y pausar la música
        checkboxMusic.checked = false;
    }

    // Escuchar el cambio en el checkbox para controlar la musica
    checkboxMusic.addEventListener('change', function() {
        if (checkboxMusic.checked) {
            // Si el checkbox esta marcado, reproducir todas las musicas y guardar el estado
            if (audioPlayerMenu) audioPlayerMenu.play();
            if (audioPlayerOpinion) audioPlayerOpinion.play();
            if (audioPlayerAgencia) audioPlayerAgencia.play();
            if (audioPlayerTSA) audioPlayerTSA.play();
            if (audioPlayerAgroglifos) audioPlayerAgroglifos.play();
            localStorage.setItem('musicEnabled', 'true');
        } else {
            // Si el checkbox no esta desmarcado, pausar todas las musicas y guardar el estado
            if (audioPlayerMenu) audioPlayerMenu.pause();
            if (audioPlayerOpinion) audioPlayerOpinion.pause();
            if (audioPlayerAgencia) audioPlayerAgencia.pause();
            if (audioPlayerTSA) audioPlayerTSA.pause();
            if (audioPlayerAgroglifos) audioPlayerAgroglifos.pause();
            localStorage.setItem('musicEnabled', 'false');
        }
    });

    // ------------------------ EFECTOS DE SONIDO -------------------------------

    // Verificar si el estado de los efectos de sonudo está guardado en localStorage
    if (localStorage.getItem('soundEffectEnabled') === 'true') {
        // Si los efectos de sonido estan habilitados, marcar el checkbox y reproducir los efectos de sonido
        checkboxSound.checked = true;
    } else {
        // Si los efectos de sonido estan deshabilitados, desmarcarcar el checkbox y pausar los efectos de sonido
        checkboxSound.checked = false;
    }

    // Escuchar el cambio en el checkbox para controlar los efectos de sonido
    checkboxSound.addEventListener('change', function() {
        if (checkboxSound.checked) {
            // Si el checkbox esta marcado, reproducir todos los efectos de sonido y guardar el estado
            if (soundPlayerGanar) soundPlayerGanar.play();
            if (soundPlayerPerder) soundPlayerPerder.play();
            if (soundPlayerRecord) soundPlayerRecord.play();
            localStorage.setItem('soundEffectEnabled', 'true');
        } else {
            // Si el checkbox no esta desmarcado, pausar todos los efectos de sonido y guardar el estado
            if (soundPlayerGanar) soundPlayerGanar.pause();
            if (soundPlayerPerder) soundPlayerPerder.pause();
            if (soundPlayerRecord) soundPlayerRecord.pause();
            localStorage.setItem('soundEffectEnabled', 'false');
        }
    });
});
