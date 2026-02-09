document.addEventListener('DOMContentLoaded', () => {
  const chips = Array.from(document.querySelectorAll('.portfolio-filters .tag-chip'));
  const cards = Array.from(document.querySelectorAll('.project-card'));

  // Map short chip labels to full keywords for filtering
  const chipKeywordMap = {
    'DeFi': ['defi', 'tokenomics'],
    'RWA': ['nft-rwa', 'creator tools'],
    'Markets': ['prediction markets', 'trading'],
    'Gaming': ['gaming', 'vrf', 'gamefi', 'metaverse'],
    'Trading': ['trading', 'token launch'],
    'DevTools': ['ai', 'devtooling'],
    'NFTs': ['nft-fi', 'collateral'],
    'Marketplace': ['marketplace', 'collectibles'],
    'Metaverse': ['gamefi', 'metaverse'],
    'Creator': ['nft-rwa', 'creator tools']
  };

  // Get keywords for a chip
  function keywordsFromChip(chipText) {
    const clean = chipText.trim().toLowerCase();
    return chipKeywordMap[chipText] || [clean];
  }

  // Normalize card categories
  function categoriesFromCard(card) {
    const raw = card.getAttribute('data-category') || '';
    return raw.split(',').map(s => s.trim().toLowerCase()).filter(Boolean);
  }

  // Toggle chip active state
  chips.forEach(chip => {
    chip.setAttribute('role', 'button');
    chip.setAttribute('aria-pressed', 'false');
    chip.tabIndex = 0;
    chip.addEventListener('click', () => {
      chip.classList.toggle('active');
      chip.setAttribute('aria-pressed', chip.classList.contains('active'));
      applyFilter();
    });
    chip.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        chip.click();
      }
    });
  });

  function applyFilter() {
    const activeKeywords = new Set();
    chips.filter(c => c.classList.contains('active')).forEach(c => {
      keywordsFromChip(c.textContent).forEach(k => activeKeywords.add(k));
    });

    // If no chips active, reveal all
    if (activeKeywords.size === 0) {
      cards.forEach(card => showCard(card));
      return;
    }

    cards.forEach(card => {
      const cats = categoriesFromCard(card);
      const matches = cats.some(cat => Array.from(activeKeywords).some(k => cat.indexOf(k) !== -1 || k.indexOf(cat) !== -1));
      if (matches) showCard(card); else hideCard(card);
    });
  }

  function showCard(card) {
    card.classList.remove('filtered-out');
    gsap.to(card, { autoAlpha: 1, y: 0, duration: 0.3, ease: 'power2.out' });
  }

  function hideCard(card) {
    card.classList.add('filtered-out');
    gsap.to(card, { autoAlpha: 0, y: 8, duration: 0.2, ease: 'power2.out' });
  }

  // initial entrance animation
  if (typeof gsap !== 'undefined') {
    gsap.from(cards, {
      autoAlpha: 0,
      y: 20,
      stagger: 0.06,
      duration: 0.6,
      ease: 'power3.out',
      delay: 0.08
    });
  }

  // Respect reduced motion
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced && typeof gsap !== 'undefined') {
    gsap.killTweensOf(cards);
    cards.forEach(c => c.style.opacity = 1);
  }

  // Expose filter function for console debugging
  window.__applyProjectFilter = applyFilter;
});
