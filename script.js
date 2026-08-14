// Tab Switching Navigasi Halaman (Home, About, Activity)
const navButtons = document.querySelectorAll('.nav-btn');
const tabPanes = document.querySelectorAll('.tab-pane');

navButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    navButtons.forEach(b => b.classList.remove('active'));
    tabPanes.forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(`tab-${btn.dataset.tab}`).classList.add('active');
  });
});

// Slide Switching (Log Status vs Story Hari Ini)
const slideTabs = document.querySelectorAll('.slide-tab');
const slideContents = document.querySelectorAll('.slide-content');

slideTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    slideTabs.forEach(t => t.classList.remove('active'));
    slideContents.forEach(c => c.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById(tab.dataset.slide).classList.add('active');
  });
});

// Theme Toggle (Light / Dark Mode)
document.getElementById('theme-toggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Filter Showcase (Semua | ROM | Module | Patch & Fixes)
const filterBtns = document.querySelectorAll('.filter-btn');
const showcaseCards = document.querySelectorAll('.card-item');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    const filter = btn.dataset.filter;
    showcaseCards.forEach(card => {
      if (filter === 'all' || card.dataset.category === filter) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});
