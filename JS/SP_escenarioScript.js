document.addEventListener('DOMContentLoaded', () => {
    const radioButtons = document.querySelectorAll('.form-check-input');
    const stages = document.querySelectorAll('.selectStage');
    const chosenStage = document.querySelector('.chosenStage');
    const btnEscenario = document.getElementById('btnEscenario');
    const form = document.getElementById('idFormSP'); // Asegúrate de que el formulario tenga este ID

    radioButtons.forEach(button => {
        button.addEventListener('change', () => {
            // Remover la clase activa de todos los escenarios
            stages.forEach(stage => {
                stage.classList.remove('active');
            });

            // Agregar la clase activa al escenario seleccionado
            const selectedStage = document.querySelector(`.selectStage[data-id="${button.id}"]`);
            if (selectedStage) {
                selectedStage.classList.add('active');
            }

            // Habilitar el botón con sus propiedades
            if (chosenStage) {
                chosenStage.setAttribute('aria-disabled', 'false');
                btnEscenario.removeAttribute('disabled'); 
            }
        });
    });

    // Evitar que el formulario se envíe
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Previene el envío del formulario

        const selectedRadio = document.querySelector('.form-check-input:checked');
        if (selectedRadio) {
            const selectedId = selectedRadio.id;

            // Redirigir según la opción seleccionada
            if (selectedId === 'SP_Stage1') {
                window.location.href = '../../Escenarios/Agencia Espacial/index.html';
            } else if (selectedId === 'SP_Stage2') {
                window.location.href = '../../Escenarios/TopSecretArea/index.html';
            } else {
                alert('La opción seleccionada no es válida.');
            }
        } else {
            alert('Por favor, selecciona un escenario antes de iniciar la partida.');
        }
    });
});

