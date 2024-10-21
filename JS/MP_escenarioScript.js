document.addEventListener('DOMContentLoaded', () => {
    const radioButtons = document.querySelectorAll('.form-check-input');
    const stages = document.querySelectorAll('.selectStage');
    const dataSection = document.querySelector('.dataSection');

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
            if (dataSection) {
                dataSection.setAttribute('aria-disabled', 'false');
                txtUsername.removeAttribute('disabled'); 
                btnEscenario.removeAttribute('disabled'); 
            }
        });
    });
});

function infoPopup() {
  var popup = document.getElementById("infoPopup");
  popup.classList.toggle("show");
}
