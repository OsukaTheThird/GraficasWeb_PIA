window.addEventListener('load', function() {
    var soundPlayerGanar= document.getElementById('idAudioGanar');  // Efecto de sonido al ganar
    var soundPlayerPerder = document.getElementById('idAudioPerder');  // Efecto de sonido al perder
    var soundPlayerRecord = document.getElementById('idAudioRecord');  // Efecto de sonido al batir un record

    var soundEffectEnabled = localStorage.getItem('soundEffectEnabled');

    if (soundEffectEnabled === 'true') {
        // Si los efectos de sonido estan habilitados, reproducirla solo si el elemento existe
        if (soundPlayerGanar) soundPlayerGanar.play();
        if (soundPlayerPerder) soundPlayerPerder.play();
        if (soundPlayerRecord) soundPlayerRecord.play();
    } else {
        // Si los efectos de sonido estan deshabilitados, pausarla solo si el elemento existe
        if (soundPlayerGanar) soundPlayerGanar.pause();
        if (soundPlayerPerder) soundPlayerPerder.pause();
        if (soundPlayerRecord) soundPlayerRecord.pause();
    }
});