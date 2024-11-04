$(document).ready(function () {
  // If Else para mantener iniciada o cerrada la sesion del jugador
  if (localStorage.getItem('loggedIn') === 'true') {
    $("#btnLogin").hide();
    $("#btnLogout").show();
    $("#idImgGoogle").show();
  } else {
    $("#btnLogin").show();
    $("#btnLogout").hide();
    $("#idImgGoogle").hide();
  }

  $("#btnLogin").on("click", function () {  
    $("#btnLogin").hide();
    $("#btnLogout").show();
    $("#idImgGoogle").show();
    localStorage.setItem('loggedIn', 'true');
  });  

  $("#btnLogout").on("click", function () {  
    $("#btnLogout").hide();
    $("#idImgGoogle").hide();
    $("#btnLogin").show();
    localStorage.setItem('loggedIn', 'false');
  });
});


// Movimiento del fondo con el cursor

// const bg = document.querySelector('.background-image');
// const windowWidth = window.innerWidth / 5;
// const windowHeight = window.innerHeight / 5;
// let mouseTimeout;

// bg.addEventListener('mousemove', (e) => {
//   // Clear the timeout to reset the mouse inactivity delay
//   clearTimeout(mouseTimeout);

//   const mouseX = e.clientX / windowWidth;
//   const mouseY = e.clientY / windowHeight;

//   // Apply the new transform
//   bg.style.transform = `translate3d(-${mouseX}%, -${mouseY}%, 0)`;
  
//   // Set a timeout to apply the transition effect after mouse stops moving
//   mouseTimeout = setTimeout(() => {
//     // Apply the transition effect while keeping the current transform
//     bg.style.transition = 'transform 0.15s ease-in-out';
//   }, 300); // A short delay to ensure the transition is applied smoothly
// });

// bg.addEventListener('mouseleave', () => {
//   // Apply the transition effect when mouse leaves the background area
//   bg.style.transition = 'transform 0.50s ease-in-out';
// });