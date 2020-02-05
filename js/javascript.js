function toggleMeny() {

    document.querySelector(".navLinks").classList.toggle("navActive");
    document.querySelector(".burger").classList.toggle("toggle");

}

document.querySelector(".burger").addEventListener("click", toggleMeny);

