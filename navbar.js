function menuClose() {
  document.getElementById("menuBar").style.display = "none";

  document.getElementById("closeIcon").style.display = "none";

  document.getElementById("menuOpener").style.display = "flex";
}

function menuOpen() {
  document.getElementById("menuBar").style.display = "flex";

  document.getElementById("closeIcon").style.display = "flex";

  document.getElementById("menuOpener").style.display = "none";
}
