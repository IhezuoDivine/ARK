document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menu-btn");
  const menuIcon = document.getElementById("menu-icon");
  const closeIcon = document.getElementById("close-icon");
  const sideMenu = document.getElementById("side-menu"); // your menu container

  menuBtn.addEventListener("click", () => {
    const isOpen = sideMenu.style.display === "block";
    if (isOpen) {
      sideMenu.style.display = "none";
      menuIcon.style.display = "inline";
      closeIcon.style.display = "none";
    } else {
      sideMenu.style.display = "block";
      menuIcon.style.display = "none";
      closeIcon.style.display = "inline";
    }
  });
});
