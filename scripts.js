// scripts.js

document.addEventListener("DOMContentLoaded", function () {
  const Button = document.getElementById("menu-button");
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");
  const overlay = document.querySelector('.overlay')
  console.log(overlay)

  menuToggle.addEventListener("click", function () {
    // toggle active class 
    navMenu.classList.toggle("active");
    // Toggle active class
    overlay.classList.toggle('active');
    // if menu contains active class 
    // add close class to button
    // remove hamburger class form button
    if (navMenu.classList.contains("active")) {
      Button.classList.add("close");
      Button.classList.remove("hamburger");
    } else {
        // remove class close from button
      Button.classList.remove("close");
    //   add hamburger class to button
      Button.classList.add("hamburger");
    }
  });
});
