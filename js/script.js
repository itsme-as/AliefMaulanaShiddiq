

toggleNav = () =>{
    let navigation_hamburger = document.getElementById('navigation');
    let firstBar = document.getElementById('firstBar');
    let secondBar = document.getElementById('secondBar');

    navigation_hamburger.classList.toggle("opacity-100");
    navigation_hamburger.classList.toggle("hidden");
    firstBar.classList.toggle("rotate-45");
    firstBar.classList.toggle("translate-y-[8px]");
    secondBar.classList.toggle("-rotate-45");
    secondBar.classList.toggle("-translate-y-[4px]");
}

hoverBar = () =>{
    let hoverBar = document.getElementById('secondBar');
    let firstHoverBar = document.getElementById('firstBar');

    hoverBar.classList.remove("w-7");
    hoverBar.classList.add("w-10");
    hoverBar.classList.remove("bg-(--white)");
    hoverBar.classList.add("bg-(--secondary)");
    firstHoverBar.classList.remove("bg-(--white)");
    firstHoverBar.classList.add("bg-(--secondary)");
}

hoverBarOut = () =>{
    let hoverBar = document.getElementById('secondBar');
    let firstHoverBar = document.getElementById('firstBar');
    hoverBar.classList.remove("w-10");
    hoverBar.classList.add("w-7");
    hoverBar.classList.remove("bg-(--secondary)");
    hoverBar.classList.add("bg-(--white)");
    firstHoverBar.classList.remove("bg-(--secondary)");
    firstHoverBar.classList.add("bg-(--white)");
}

let texts = document.querySelectorAll('.active-text');
let currentIndex = 0;

setInterval(() => {
    // teks keluar ke kiri
    texts[currentIndex].classList.remove("opacity-100", "translate-x-0");
    texts[currentIndex].classList.add("opacity-0", "-translate-x-5");

    // index berikutnya
    currentIndex = (currentIndex + 1) % texts.length;

    // reset posisi sebelum muncul
    texts[currentIndex].classList.remove("opacity-100", "translate-x-0", "-translate-x-5");
    texts[currentIndex].classList.add("opacity-0", "translate-x-5");

    // pakai sedikit delay biar animasi masuk halus
    setTimeout(() => {
        texts[currentIndex].classList.remove("opacity-0", "translate-x-5");
        texts[currentIndex].classList.add("opacity-100", "translate-x-0");
    }, 50);
}, 3000); // ganti teks tiap 3 detik


let textsIntro = document.querySelectorAll('.active-text-intro');
let currentIndexIntro = 0;
setInterval(() => {
    // teks keluar ke kiri
    textsIntro[currentIndexIntro].classList.remove("text-(--white)", "opacity-100");
    textsIntro[currentIndexIntro].classList.add("text-(--secondary)", "opacity-30");
    currentIndexIntro = (currentIndexIntro + 1) % textsIntro.length;
    textsIntro[currentIndexIntro].classList.add("text-(--white)","opacity-100");
}, 1000); // ganti teks tiap 3 detik

// Scrollbar custom
window.addEventListener('scroll', () => {
    const container = document.getElementById('scrollBarContainer');
    const thumb = document.getElementById('scrollBarThumb');
    if (!container || !thumb) return;

    // Total scrollable height
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    // Scroll position (0 - 1)
    const scrollPercent = window.scrollY / scrollHeight;

    // Container height (in px)
    const containerHeight = container.offsetHeight;
    // Thumb height (in px)
    const thumbHeight = thumb.offsetHeight;

    // Max translateY (so thumb stays inside container)
    const maxTranslate = containerHeight - thumbHeight;

    // Set thumb position
    thumb.style.transform = `translateY(${scrollPercent * maxTranslate}px)`;
});