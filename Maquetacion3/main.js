document.querySelector(".botonmovil").addEventListener("click", () => {
  document.querySelector(".menu").classList.toggle("show");
});

ScrollReveal().reveal(".showcase");
ScrollReveal().reveal(".news-card", { delay: 500 });
ScrollReveal().reveal(".banner", { delay: 500 });
