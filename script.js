document.addEventListener('DOMContentLoaded', function () {
  const cards = document.querySelectorAll('.hover-lift');

  cards.forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / 25;
      const rotateY = (centerX - x) / 25;
      card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });

  const starLayer = document.querySelector('.stars');
  if (starLayer) {
    let offset = 0;
    window.addEventListener('scroll', () => {
      offset = window.scrollY * 0.08;
      starLayer.style.transform = `translateY(${offset}px)`;
    });
  }
});
