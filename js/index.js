document.getElementById("collapse").addEventListener("click", function () {
  document.getElementById("navbarContainer").classList.toggle("active");
  document.getElementById("frofileContainer").classList.toggle("active");
});

document
  .getElementById("collapse_question")
  .addEventListener("click", function () {
    document.getElementById("hide_info").classList.toggle("col");
    document.getElementById("collapse_question").classList.toggle("minus");
  });
document
  .getElementById("collapse_questionTow")
  .addEventListener("click", function () {
    document.getElementById("hide_infoTow").classList.toggle("col");
    document.getElementById("collapse_question").classList.toggle("minus");
  });
document
  .getElementById("collapse_questionThree")
  .addEventListener("click", function () {
    document.getElementById("hide_infoThree").classList.toggle("col");
    document.getElementById("collapse_question").classList.toggle("minus");
  });
