document.addEventListener('DOMContentLoaded', () => {
    const radioButtons = document.querySelectorAll('.form-check-input');
    const stages = document.querySelectorAll('.selectStage');
    const dataSection = document.querySelector('.dataSection');
    const btnEscenario = document.getElementById('btnEscenario');
    const form = document.getElementById('idFormMP'); // Asegúrate de que el formulario tenga este ID

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

            // Habilitar el botón y el campo de texto
            if (dataSection) {
                dataSection.setAttribute('aria-disabled', 'false');
                document.getElementById('txtUsername').removeAttribute('disabled'); 
                btnEscenario.removeAttribute('disabled'); 
            }
        });
    });

    // Prevenir el envío del formulario y redirigir
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Evita que la página se recargue

        const selectedRadio = document.querySelector('.form-check-input:checked');
        const usernameInput = document.getElementById('txtUsername');

        if (selectedRadio && usernameInput.value.trim() !== '') {
            // Redirigir a la ruta del escenario
            window.location.href = '../../Escenarios/Acrolifos/index.html';
        } else {
            alert('Por favor, selecciona un escenario y proporciona un nombre de usuario.');
        }
    });
});

// Función para mostrar el popup
function infoPopup() {
    const popup = document.getElementById('infoPopup');
    popup.classList.toggle('show');
}
