/* ==========================================================================
   Ponto Seguro Corretora — Landing Page
   ========================================================================== */

/* --------------------------------------------------------------------------
   CONFIGURAÇÃO DO WHATSAPP
   Troque apenas o número abaixo (formato internacional, só dígitos:
   55 + DDD + número). Todos os botões da página serão atualizados.
   -------------------------------------------------------------------------- */
var WHATSAPP_NUMBER = '5598991923508'; // <<< TROQUE AQUI
var WHATSAPP_DEFAULT_MESSAGE = 'Olá! Gostaria de receber uma cotação de plano de saúde.';

/* Habilita os estilos que dependem de JS (animações de entrada) */
document.documentElement.classList.add('js');

document.addEventListener('DOMContentLoaded', function () {

  /* ---------- Links do WhatsApp ---------- */
  document.querySelectorAll('.js-whatsapp').forEach(function (link) {
    var message = link.getAttribute('data-message') || WHATSAPP_DEFAULT_MESSAGE;
    link.href = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(message);
  });

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
