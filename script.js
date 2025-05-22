document.addEventListener("DOMContentLoaded", function () {
  const verMaisBtn = document.querySelector(".ver-mais-btn");
  const imagensExtras = document.querySelectorAll(".hero-galeria .extra");

  verMaisBtn.addEventListener("click", function () {
    const mostrando = [...imagensExtras].some(img => img.classList.contains("mostrar"));

    imagensExtras.forEach(img => {
      img.classList.toggle("mostrar", !mostrando);
    });

    verMaisBtn.textContent = mostrando ? "Ver mais" : "Ver menos";

    // Apenas rolar se estiver mostrando
    if (!mostrando) {
      // Espera para garantir que as imagens foram renderizadas
      setTimeout(() => {
        verMaisBtn.scrollIntoView({ behavior: "smooth", block: "end" });
      }, 300);
    }
  });
});
