// --- Navigasi Tab Utama (Home, About, Activity) ---
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

// --- Dual-Slide Widget Switcher ---
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

// --- Generator Logcat Random ---
const logs = [
  "[SUCCESS] Booting AOSP Android 14 on legacy kernel 4.14!",
  "[FAIL] Kernel Panic at 0x00003f! Bootloop di logo vendor.",
  "[INFO] VoLTE fixed pake RIL blobs dari ROM sebelah 🤫",
  "[WARNING] Camera HAL1 error - Preview ijo-ijo kek Hulk.",
  "[SUCCESS] Magisk v27.0 patched & Root access granted!"
];

document.getElementById('btn-gen-log').addEventListener('click', () => {
  const randomLog = logs[Math.floor(Math.random() * logs.length)];
  document.getElementById('log-output').innerHTML += `<br>${randomLog}`;
});

// --- Generator Story Random ---
const stories = [
  "Niat awal cuma mau update Magisk, eh malah kebablasan wiping internal. Foto kenangan melayang, tapi kernel tetep smooth.",
  "Begadang sampe jam 3 pagi cuma gara-gara lupa chmod 755 di script installer. Klasik.",
  "Porting HyperOS ke HP jadul, baterai langsung berasa kaya setrikaan, tapi gaya tetep nomor satu.",
  "Nemu bug unik: Kamera cuma jalan kalau HP di-charge pake powerbank. Ajaib!"
];

document.getElementById('btn-gen-story').addEventListener('click', () => {
  const randomStory = stories[Math.floor(Math.random() * stories.length)];
  document.getElementById('story-output').textContent = `"${randomStory}"`;
});

// --- Toggle Dark / Light Theme ---
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// --- Filter Showcase ---
const filterBtns = document.querySelectorAll('.filter-btn');
const cardItems = document.querySelectorAll('.card-item');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    const filter = btn.dataset.filter;
    cardItems.forEach(item => {
      if (filter === 'all' || item.dataset.category === filter) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});
