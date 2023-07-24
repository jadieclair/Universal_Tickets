document.addEventListener("DOMContentLoaded", function () {
  const video = document.querySelector("video");
  video.play();
});

document.addEventListener("DOMContentLoaded", function () {
  const video = document.querySelector("video");
  video.play();
});

function redirectToLoginForm() {
  window.location.href = "login.html";
}

$(".navbar .nav-link").on("click", function () {
  $(".navbar").find(".active").removeClass("active");
  $(this).addClass("active");
});
