document.addEventListener('DOMContentLoaded', () => {
    const burgerIcon = document.querySelector(".burger");
    const navigation = document.querySelector(".nav");
    const sayit = "say it";

    /* Toggle mobile nav */
    function toggleMenu() {
        if (navigation.classList.contains("active")) {
            navigation.classList.remove("active");
            console.log("burger1")
        } else {
            navigation.classList.add("active");
            console.log("burger0")
        }
    }
    console.log(sayit);
    /* Event Listener */
    burgerIcon.addEventListener("click", toggleMenu, false);


})