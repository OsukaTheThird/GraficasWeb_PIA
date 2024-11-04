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