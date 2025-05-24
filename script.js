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
const imagensISSExtras = document.querySelectorAll('.extra-iss');

btnISS.addEventListener('click', () => {
  const mostrando = [...imagensISSExtras].some(img => img.classList.contains('mostrar-iss'));

  imagensISSExtras.forEach(img => {
    img.classList.toggle('mostrar-iss', !mostrando);
  });

  btnISS.textContent = mostrando ? 'Ver mais' : 'Ver menos';

  if (!mostrando) {
    setTimeout(() => {
      btnISS.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }, 300);
  }
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


document.querySelectorAll('.calculator-hero, .calculator-header').forEach(button => {
  button.addEventListener('click', () => {
    const calculadoraSection = document.querySelector('.calculadora-section');
    if (calculadoraSection) {
      calculadoraSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});


document.querySelector('.button-calculadora').addEventListener('click', () => {
  const tipoProjeto = document.querySelector('.calculadora-section .seletor-tipo-projeto').value;
  const consumoMensal = document.querySelector('.calculadora-section .seletor-Consumo-Mensal').value;
  const etapa2 = document.querySelector('.etapa-2');

  if (tipoProjeto !== '' && consumoMensal !== '') {
    // Mostrar a etapa 2
    etapa2.style.display = 'block';
  } else {
    alert('Por favor, selecione o Tipo de Projeto e o Consumo Mensal antes de continuar.');
  }
});

/**/

document.querySelector('.button-calculadora[type="submit"]').addEventListener('click', (e) => {
  e.preventDefault(); // Impede envio real do formulário

  const tipoProjeto = document.querySelector('.seletor-tipo-projeto').value;
  const consumoMensal = document.querySelector('.seletor-Consumo-Mensal').value;
  const nome = document.querySelector('input[placeholder="Digite seu nome"]').value.trim();
  const telefone = document.querySelector('input[placeholder="(00) 00000-0000"]').value.trim();
  const email = document.querySelector('input[placeholder="seu@email.com"]').value.trim();

  if (!tipoProjeto || !consumoMensal || !nome || !telefone || !email) {
    alert('Por favor, preencha todos os campos antes de enviar.');
    return;
  }

  const mensagem = `Tipo de projeto: ${tipoProjeto}%0A` +
                   `Consumo mensal em (kWh): ${consumoMensal}%0A` +
                   `Me chamo: ${nome}%0A` +
                   `Meu contato: ${telefone}%0A` +
                   `Meu e-mail: ${email}`;

  const telefoneWhatsApp = '5516997933419';
  const urlWhatsApp = `https://wa.me/${telefoneWhatsApp}?text=${mensagem}`;

  window.open(urlWhatsApp, '_blank');
});

// Máscara para telefone (formato BR)
document.querySelector('.input-telefone').addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, '');

    if (value.length > 11) {
        value = value.slice(0, 11);
    }

    if (value.length > 0) {
        value = value.replace(/^(\d{2})(\d)/g, '($1) $2');
    }

    if (value.length > 9) {
        value = value.replace(/(\d{5})(\d{4})$/, '$1-$2');
    } else if (value.length > 5) {
        value = value.replace(/(\d{4})(\d)/, '$1-$2');
    }

    e.target.value = value;
});