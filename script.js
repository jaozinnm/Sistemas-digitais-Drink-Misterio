/* script.js — versão nova para "O Jogo do Drink Secreto"
   - Escolha aleatória do drink
   - Animações de clique
   - Simulação das duas saídas de líquido
   - Pequenas interações visuais
*/

/* =========================================================
   CARROSSEL DO PASSO A PASSO
========================================================= */

const slides = document.querySelectorAll(".slide");
const btnPrev = document.querySelector(".btn-prev");
const btnNext = document.querySelector(".btn-next");

let atual = 0;

function mostrarSlide(index) {
    slides.forEach(s => s.classList.remove("active"));
    slides[index].classList.add("active");
}

btnNext.addEventListener("click", () => {
    atual = (atual + 1) % slides.length;
    mostrarSlide(atual);
});

btnPrev.addEventListener("click", () => {
    atual = (atual - 1 + slides.length) % slides.length;
    mostrarSlide(atual);
});


(() => {

  // ELEMENTOS
  const btnDrink = document.getElementById("btnDrink");
  const display = document.getElementById("drinkResult");
  const leftPipe = document.getElementById("pipeLeft");
  const rightPipe = document.getElementById("pipeRight");
  const hero = document.querySelector(".hero");

  // LISTA DE DRINKS (exemplo)
  const drinks = [
    "Fruta Vermelha Especial",
    "Shot Azedo Secreto",
    "Limão Turbo",
    "Mistério Misterioso",
    "Drink Arco-Íris",
    "Mistura Fantasma",
    "Modo Hardcore 🔥",
  ];

  // --- FUNÇÃO PRINCIPAL ------------------------------------

  function gerarDrink() {
    // pega drink randômico
    const escolhido = drinks[Math.floor(Math.random() * drinks.length)];

    // mostra texto
    display.textContent = "🍹 Drink escolhido: " + escolhido;

    // anima a área de resultado
    display.classList.add("pop");
    setTimeout(() => display.classList.remove("pop"), 350);

    // ativa animação dos tubos
    ativarSaidas();
  }

  // --- ANIMAÇÃO DAS SAÍDAS DE BEBIDA ------------------------

  function ativarSaidas() {
    // liga animação dos dois tubos
    leftPipe.classList.add("pour");
    rightPipe.classList.add("pour");

    // desliga após 2 segundos
    setTimeout(() => {
      leftPipe.classList.remove("pour");
      rightPipe.classList.remove("pour");
    }, 2000);
  }

  // --- EFEITO DE HOVER NO HERO -------------------------------

  hero.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;

    hero.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
  });

  hero.addEventListener("mouseleave", () => {
    hero.style.transform = "none";
  });

  // --- CLICAR NO BOTÃO ----------------------------------------

  btnDrink.addEventListener("click", () => {
    btnDrink.classList.add("clicked");
    gerarDrink();
    setTimeout(() => btnDrink.classList.remove("clicked"), 180);
  });

})();



