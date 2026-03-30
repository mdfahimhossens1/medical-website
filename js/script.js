// Fade-up scroll animation
  const fadeEls = document.querySelectorAll('.fade-up');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if(e.isIntersecting){
        setTimeout(() => e.target.classList.add('visible'), i * 70);
        obs.unobserve(e.target);
      }
    });
  }, {threshold: 0.08});
  fadeEls.forEach(el => obs.observe(el));

  // Counter
  function animateCounter(el) {
    const target = parseInt(el.dataset.target);
    const suffix = el.textContent.replace(/[0-9]/g,'');
    let start = 0;
    const step = Math.ceil(target / 60);
    const timer = setInterval(() => {
      start = Math.min(start + step, target);
      el.textContent = (start >= 1000 ? (start/1000).toFixed(0)+'k' : start) + suffix;
      if(start >= target) clearInterval(timer);
    }, 28);
  }
  const counters = document.querySelectorAll('.counter');
  const cObs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if(e.isIntersecting){ animateCounter(e.target); cObs.unobserve(e.target); } });
  }, {threshold: 0.5});
  counters.forEach(c => cObs.observe(c));

  // Back to top
  window.addEventListener('scroll', () => {
    document.getElementById('backTop').classList.toggle('show', window.scrollY > 400);
  });