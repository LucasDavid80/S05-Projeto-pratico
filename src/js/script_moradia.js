// Lógica de filtros para a página moradia.html
document.addEventListener('DOMContentLoaded', () => {
  const buttons = Array.from(document.querySelectorAll('.housing-btn-filter'));
  const cards = Array.from(document.querySelectorAll('.housing-card'));

  function clearSelected() {
    buttons.forEach(b => {
      b.classList.remove('is-selected');
      b.setAttribute('aria-pressed', 'false');
    });
  }

  function applyFilterFromButton(btn) {
    const filterType = btn.dataset.filter || 'all';
    const maxPrice = btn.dataset.maxPrice ? Number(btn.dataset.maxPrice) : null;
    const nearby = btn.dataset.nearby === 'true';

    cards.forEach(card => {
      let show = true;

      if (filterType === 'price' && maxPrice != null) {
        const price = Number(card.dataset.price);
        if (isNaN(price) || price > maxPrice) show = false;
      }

      if (filterType === 'nearby' && nearby) {
        const dist = Number(card.dataset.distance);
        // regra exemplo: considerar perto <= 10 (minutos)
        if (isNaN(dist) || dist > 10) show = false;
      }

      // se filterType for 'all', show permanece true
      card.style.display = show ? '' : 'none';
    });
  }

  // Inicial: aplicar o botão que começa selecionado
  const initially = buttons.find(b => b.classList.contains('is-selected')) || buttons[0];
  if (initially) applyFilterFromButton(initially);

  buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      clearSelected();
      btn.classList.add('is-selected');
      btn.setAttribute('aria-pressed', 'true');
      applyFilterFromButton(btn);
    });
  });
});

// Export functions if necessário (compatibilidade com módulos futuros)
if (typeof module !== 'undefined') module.exports = {};
