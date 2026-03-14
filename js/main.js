// ============================================================
// GROWTH CODE STUDIO — Main JS
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

  // --- HAMBURGER MENU ---
  const hamburger = document.getElementById('hamburger');
  const navMobile = document.getElementById('nav-mobile');

  hamburger?.addEventListener('click', () => {
    navMobile.classList.toggle('open');
  });

  navMobile?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navMobile.classList.remove('open'));
  });

  // --- SCROLL REVEAL ---
  const revealEls = document.querySelectorAll('[data-reveal]');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealEls.forEach(el => revealObserver.observe(el));

  // --- NAV SCROLL SHADOW ---
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    nav.style.borderBottomColor = window.scrollY > 10 ? '#000' : '#000';
  }, { passive: true });

  // --- SMOOTH CLOSE NAV ON LINK CLICK ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

});
