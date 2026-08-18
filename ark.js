const menuBtn = document.getElementById("menu-btn");
const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");
const mobileMenu = document.getElementById("mobile-menu");
const mainContainer = document.querySelector(".main-container");

menuBtn.addEventListener("click", function () {
  mobileMenu.classList.toggle("active");

  if (mobileMenu.classList.contains("active")) {
    // Hide main website
    mainContainer.style.display = "none";

    // Existing menu behavior
    menuIcon.style.display = "none";
    closeIcon.style.display = "inline-block";

    document.body.style.overflow = "hidden";
  } else {
    // Show main website
    mainContainer.style.display = "";

    // Existing menu behavior
    menuIcon.style.display = "inline-block";
    closeIcon.style.display = "none";

    document.body.style.overflow = "";
  }
});

const menuTitles = document.querySelectorAll(".menu-title");

menuTitles.forEach((title) => {
  title.addEventListener("click", () => {
    const currentItem = title.parentElement;

    // Close all other items
    document.querySelectorAll(".mobile-menu li").forEach((item) => {
      if (item !== currentItem) {
        item.classList.remove("active");
      }
    });

    // Open / close current item
    currentItem.classList.toggle("active");
  });
});
