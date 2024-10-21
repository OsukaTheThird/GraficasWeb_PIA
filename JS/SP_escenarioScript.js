document.addEventListener('DOMContentLoaded', () => {
    const radioButtons = document.querySelectorAll('.form-check-input');
    const stages = document.querySelectorAll('.selectStage');
    const chosenStage = document.querySelector('.chosenStage');

    radioButtons.forEach(button => {
        button.addEventListener('change', () => {
            stages.forEach(stage => {
                stage.classList.remove('active');
            });
            const selectedStage = document.querySelector(`.selectStage[data-id="${button.id}"]`);
            if (selectedStage) {
                selectedStage.classList.add('active');
            }
            // Habilitar el boton con sus propiedades
            if (chosenStage) {
                chosenStage.setAttribute('aria-disabled', 'false');
                btnEscenario.removeAttribute('disabled'); 
            }
        });
    });
});
