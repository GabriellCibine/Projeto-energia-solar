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

/**/

const verMaisBtnNS = document.querySelector(".ver-mais-btn-ns");
  const imagensExtrasNS = document.querySelectorAll(".extra-ns");

  if (verMaisBtnNS) {
    verMaisBtnNS.addEventListener("click", function () {
      const mostrando = [...imagensExtrasNS].some(img => img.classList.contains("mostrar-ns"));

      imagensExtrasNS.forEach(img => {
        img.classList.toggle("mostrar-ns", !mostrando);
      });

      verMaisBtnNS.textContent = mostrando ? "Ver mais" : "Ver menos";

      if (!mostrando) {
        setTimeout(() => {
          verMaisBtnNS.scrollIntoView({ behavior: "smooth", block: "end" });
        }, 300);
      }
    });
  }


  /**/
const btnISS = document.querySelector('.ver-mais-btn-iss');
  const imgISS = document.querySelector('.img-iss2');

  btnISS.addEventListener('click', () => {
    imgISS.classList.toggle('mostrar-iss');
    btnISS.textContent = imgISS.classList.contains('mostrar-iss') ? 'Ver menos' : 'Ver mais';
  });


  /**/

  document.querySelector('.ver-mais-btn-ldm').addEventListener('click', function () {
    document.querySelectorAll('.extra-ldm').forEach(function (img) {
      img.classList.toggle('mostrar-ldm');
    });

    this.textContent = this.textContent === 'Ver mais' ? 'Ver menos' : 'Ver mais';
  });