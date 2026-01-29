export default function Footer() {
  return (
    <footer class="site-footer">
      <div class="container footer-container">
        <div class="footer-top">
          <div class="footer-logo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#0056b3"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-layers"
            >
              <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
              <polyline points="2 17 12 22 22 17"></polyline>
              <polyline points="2 12 12 17 22 12"></polyline>
            </svg>
            <span class="logo-text">NatiX</span>
          </div>
          <p class="footer-tagline">Satu Sistem, Semua Tertata.</p>
        </div>

        <div class="footer-divider"></div>

        <div class="footer-bottom">
          <div class="footer-item">
            <span class="footer-item-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </span>
            <span>Magelang, Jawa Tengah</span>
          </div>
          <span class="footer-separator">|</span>
          <div class="footer-item">
            <span class="footer-item-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </span>
            <span>Konsultasi via Whatsapp</span>
          </div>
          <span class="footer-separator">|</span>
          <div class="footer-item">
            <span class="footer-item-icon copyright-icon">
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-help-circle"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
            </span>
            <span>© 2025 NatiX</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
