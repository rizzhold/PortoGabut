document.addEventListener('DOMContentLoaded', () => {
  // 1. Cek & Sync Tema dari localStorage
  const themeToggleBtn = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
  }

  // Toggle Tema pas diklik
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      const isDark = document.body.classList.contains('dark-mode');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
  }

  // 2. Tombol Salin Link
  const copyBtn = document.getElementById('btn-copy-link');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(window.location.href).then(() => {
        const textAwal = copyBtn.innerText;
        copyBtn.innerText = '✅ Link Tersalin!';
        setTimeout(() => copyBtn.innerText = textAwal, 2000);
      });
    });
  }
});
