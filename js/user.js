document.addEventListener('DOMContentLoaded', () => {
    const burgerIcon = document.querySelector(".burger");
    const navigation = document.querySelector(".nav");
    const sayit = "say it";
    const navLinks = document.querySelectorAll('.nav li')

    /* Toggle mobile nav */
    function toggleMenu() {

        navLinks.forEach((link, index) => {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 14}s`;

            console.log(link);
        })

        if (navigation.classList.contains("active")) {
            navigation.classList.remove("active");
            console.log("burger1")
        } else {
            navigation.classList.add("active");
            console.log("burger0")
        }
    }
    // console.log(navLinks);
    /* Event Listener */
    burgerIcon.addEventListener("click", toggleMenu, false);

})