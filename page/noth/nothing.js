document.addEventListener('DOMContentLoaded', () => {
  // Cek mode gelap dari localStorage utama
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
  }

  // Tombol Salin Link Halaman
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
