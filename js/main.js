/* ==========================================================================
   Ponto Seguro Corretora — Landing Page
   ========================================================================== */

/* --------------------------------------------------------------------------
   CONFIGURAÇÃO DO WHATSAPP
   Troque apenas o número abaixo (formato internacional, só dígitos:
   55 + DDD + número). Todos os botões da página serão atualizados.
   -------------------------------------------------------------------------- */
var WHATSAPP_NUMBER = '5500000000000'; // <<< TROQUE AQUI
var WHATSAPP_DEFAULT_MESSAGE = 'Olá! Gostaria de receber uma cotação de plano de saúde.';

/* Habilita os estilos que dependem de JS (animações de entrada) */
document.documentElement.classList.add('js');

document.addEventListener('DOMContentLoaded', function () {

  /* ---------- Links do WhatsApp ---------- */
  document.querySelectorAll('.js-whatsapp').forEach(function (link) {
    var message = link.getAttribute('data-message') || WHATSAPP_DEFAULT_MESSAGE;
    link.href = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(message);
  });

  /* ---------- Menu mobile ---------- */
  var toggle = document.getElementById('menu-toggle');
  var menu = document.getElementById('menu');

  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var open = menu.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    });

    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        menu.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Abrir menu');
      });
    });
  }

  /* ---------- Sombra do header ao rolar ---------- */
  var header = document.querySelector('.header');

  function onScroll() {
    header.classList.toggle('is-scrolled', window.scrollY > 8);
  }

  if (header) {
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---------- Animações de entrada ---------- */
  var reveals = document.querySelectorAll('.reveal');
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reveals.length && 'IntersectionObserver' in window && !reduceMotion) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    reveals.forEach(function (el) { observer.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('is-visible'); });
  }
});
