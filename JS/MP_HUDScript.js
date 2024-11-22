window.onload = () => {
    h = 0; m = 0; s = 0; mls = 0;
    time = document.getElementById("idTiempo");

    iniciarCronometro();
}

function iniciarCronometro() {
    // Llamamos a la función de forma recursiva utilizando requestAnimationFrame
    requestAnimationFrame(actualizarCronometro);
}

function actualizarCronometro() {
    escribirConteo();  // Actualizamos el cronómetro
    requestAnimationFrame(actualizarCronometro);  // Llamamos de nuevo para la siguiente actualización
}

function escribirConteo() {
    let ht, mt, st, mlst;
    mls++;

    // Controlamos el avance del cronómetro
    if (mls > 99) {
        mls = 0;
        s++;
    }
    if (s > 59) {
        s = 0;
        m++;
    }
    if (m > 59) {
        m = 0;
        h++;
    }

    // Formateamos las unidades
    mlst = ('0' + mls).slice(-2);
    st = ('0' + s).slice(-2);
    mt = ('0' + m).slice(-2);
    ht = ('0' + h).slice(-2);

    // Actualizamos el contenido HTML
    time.innerHTML = `${ht}:${mt}:${st}.${mlst}`;
}
