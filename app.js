const hamburger_menu = document.querySelector(".hamburger-menu");
const navbar = document.querySelector(".navBar");

hamburger_menu.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

// page up animation
const scrollUpBtn = document.querySelector(".scrollUpBtn");
// ha az oldalon lejebb görgetsz 200px-elt akkor megjelenik a gomb
window.onscroll = () => {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollUpBtn.classList.add("show");
    }
    else {
        scrollUpBtn.classList.remove("show");
    }
}
// Ha rákattintasz akkor a lap tetejére ugrik
scrollUpBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

// typing animation
const typed = new Typed(".typing", {
    strings: ["YouTuber", "Blogger", "Developer", "Designer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

const typed2 = new Typed(".typing2", {
    strings: ["YouTuber", "Blogger", "Developer", "Designer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

// scrollIndicator
const scrollIndicator = document.querySelector(".scrollIndicator");

window.addEventListener("scroll", () => {
    // scrollHeight = content + padding értékét adja vissza pixelpontosan
    // innerHeight = viewHeight értékét adja vissza
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    const curentScrolled = window.scrollY;

    const scrollIndicatorWidth = Math.ceil( curentScrolled / scrollableHeight * 100);

    scrollIndicator.style.width = `${scrollIndicatorWidth}%`;
});