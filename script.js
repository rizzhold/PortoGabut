// =========================================
// 1. FLOATING SLIDING INDICATOR & TAB SWITCH
// =========================================
const navButtons = document.querySelectorAll('.nav-btn');
const tabPanes = document.querySelectorAll('.tab-pane');
const indicator = document.getElementById('nav-indicator');

function updateIndicator(activeBtn) {
  if (!activeBtn || !indicator) return;
  // Hitung posisi dan lebar tombol aktif
  indicator.style.width = `${activeBtn.offsetWidth}px`;
  indicator.style.transform = `translateX(${activeBtn.offsetLeft - 4}px)`; // Sesuaikan padding container
}

// Set posisi indicator awal pas web dibuka
window.addEventListener('DOMContentLoaded', () => {
  const activeBtn = document.querySelector('.nav-btn.active');
  updateIndicator(activeBtn);
});

// Rekalkulasi posisi saat layar di-resize
window.addEventListener('resize', () => {
  const activeBtn = document.querySelector('.nav-btn.active');
  updateIndicator(activeBtn);
});

// Click event tombol navigasi
navButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    // 1. Meluncurkan background indikator biru
    updateIndicator(btn);

    // 2. Ganti class active tombol
    navButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // 3. Pindah tab halaman dengan animasi Fade In + Slide Up
    tabPanes.forEach(p => p.classList.remove('active'));
    const targetTab = document.getElementById(`tab-${btn.dataset.tab}`);
    if (targetTab) {
      targetTab.classList.add('active');
    }
  });
});

// =========================================
// 2. SLIDE SWITCHING WIDGET (LOG vs STORY)
// =========================================
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

// =========================================
// 3. THEME TOGGLE (LIGHT / DARK MODE)
// =========================================
document.getElementById('theme-toggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// =========================================
// 4. FILTER SHOWCASE (SEMUA | ROM | MODULE | PATCH)
// =========================================
const filterBtns = document.querySelectorAll('.filter-btn');
const showcaseCards = document.querySelectorAll('.card-item');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    const filter = btn.dataset.filter;
    showcaseCards.forEach(card => {
      const cardParent = card.closest('.card-item-link') || card;
      if (filter === 'all' || card.dataset.category === filter) {
        cardParent.style.display = 'block';
      } else {
        cardParent.style.display = 'none';
      }
    });
  });
});
