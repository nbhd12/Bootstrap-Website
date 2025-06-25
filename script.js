document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("participation-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Your response is submitted."); 
  });
});
