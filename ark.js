const menuBtn = document.getElementById("menu-btn");
const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", function () {

  mobileMenu.classList.toggle("active");

  if (mobileMenu.classList.contains("active")) {

    menuIcon.style.display = "none";
    closeIcon.style.display = "inline-block";

    document.body.style.overflow = "hidden";

  } else {

    menuIcon.style.display = "inline-block";
    closeIcon.style.display = "none";

    document.body.style.overflow = "";
  }

});