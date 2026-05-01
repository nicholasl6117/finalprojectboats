// Javascript - Get Current Year for the Footer
window.onload = function () {
    let d = new Date();
    document.getElementById("copyrightyear").innerHTML = d.getFullYear();
}

// Code for mobile nav menu
const navigationMenu = document.getElementById("nav_menu");
const navButton = document.getElementById("toggle-menu");

function toggleMenu() {
    let isVisible = navigationMenu.getAttribute("data-visible");

    if (isVisible === "false") {
        if (navigationMenu.classList.contains("active")) {
            navigationMenu.setAttribute("data-visible", "true");
            navButton.setAttribute("data-visible", "true");
        }
        else {
            dataDisplay();
            setTimeout(toggleMenu, 200);
        }
    }
    else {
        navigationMenu.setAttribute("data-visible", "false");
        navButton.setAttribute("data-visible", "false");
        setTimeout(dataDisplay, 200);
    }

    function dataDisplay() {
        navigationMenu.classList.toggle("active");
    }
}

navButton.addEventListener("click", toggleMenu);