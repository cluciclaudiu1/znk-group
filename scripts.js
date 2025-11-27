 document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector(".znk-header");
    const toggle = document.querySelector(".nav-toggle");
    const nav = document.querySelector(".znk-nav");

    if (!header || !toggle || !nav) return;

    window.addEventListener("scroll", function () {
      header.classList.toggle("header-scrolled", window.scrollY > 10);
    });

    toggle.addEventListener("click", function () {
      toggle.classList.toggle("open");
      nav.classList.toggle("open");
    });
  });

  const backToTop = document.getElementById("backToTop");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      backToTop.style.opacity = "1";
      backToTop.style.pointerEvents = "auto";
    } else {
      backToTop.style.opacity = "0";
      backToTop.style.pointerEvents = "none";
    }
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });