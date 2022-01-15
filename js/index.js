document.getElementById("collapse").addEventListener("click", function () {
  document.getElementById("navbarContainer").classList.toggle("active");
  document.getElementById("frofileContainer").classList.toggle("active");
});

document.getElementById("close_icon").addEventListener("click", function () {
  document.getElementById("navbarContainer").style.display = "none";
  document.getElementById("frofileContainer").style.display = "none";
  document.getElementById("close_icon").style.display = "none";
});
