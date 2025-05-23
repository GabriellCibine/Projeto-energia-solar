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


document.getElementById('link-inicio').addEventListener('click', function(e) {
  e.preventDefault(); // impede comportamento padrão do link
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});


document.getElementById('link-quem-somos').addEventListener('click', function(e) {
  e.preventDefault(); // Impede o comportamento padrão do link

  const quemSomosSection = document.querySelector('.container-quem-somos');
  if (quemSomosSection) {
    quemSomosSection.scrollIntoView({
      behavior: 'smooth'
    });
  }
});



document.getElementById('link-contato').addEventListener('click', function(e) {
  e.preventDefault();

  const contatoSection = document.querySelector('article');
  if (contatoSection) {
    contatoSection.scrollIntoView({
      behavior: 'smooth'
    });
  }
});


const btnContactHeader = document.querySelector('.contact-header');
const btnContactHero = document.querySelector('.contact-hero');

// URL do WhatsApp
const whatsappUrl = 'https://wa.me/5516997933419';

// Função que abre o link numa nova aba
function abrirWhatsApp() {
  window.open(whatsappUrl, '_blank');
}

// Adiciona o evento de clique aos dois botões, se existirem
if (btnContactHeader) {
  btnContactHeader.addEventListener('click', abrirWhatsApp);
}

if (btnContactHero) {
  btnContactHero.addEventListener('click', abrirWhatsApp);
}

/**/

document.querySelectorAll('.calculator-hero, .calculator-header').forEach(button => {
  button.addEventListener('click', () => {
    const calculadoraSection = document.querySelector('.calculadora-section');
    if (calculadoraSection) {
      calculadoraSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});