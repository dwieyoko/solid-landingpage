import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section class="hero-section">
      <div class="hero-bg-wrapper">
        <img
          src="/assets/hero_panoramic.png"
          alt="NatiX Hero Background"
          class="hero-bg-img"
        />
      </div>
      <div class="hero-gradient-overlay"></div>
      
      <div class="container hero-container">
        <Reveal>
          <div class="hero-content">
            <div class="hero-brand">NatiX</div>
            <h1 class="hero-title">Satu Sistem, Semua Tertata</h1>
            <p class="hero-subtitle">
              Platform ERP terintegrasi untuk sekolah dan lembaga pendidikan.
              Mengelola administrasi, operasional, dan manajemen pendidikan dalam
              satu sistem modern yang mudah digunakan.
            </p>
            <div class="hero-buttons">
              <a href="#" class="btn btn-primary">
                Minta Demo
              </a>
              <a href="#" class="btn btn-outline-light">
                Konsultasi Gratis
              </a>
            </div>
          </div>
        </Reveal>
      </div>
      <div class="hero-wave-silhouette"></div>
    </section>
  );
}

