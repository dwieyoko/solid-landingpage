import { createSignal, onMount, onCleanup } from "solid-js";
import Reveal from "./Reveal";

export default function Hero() {
  const [scrollY, setScrollY] = createSignal(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  onMount(() => {
    window.addEventListener("scroll", handleScroll);
  });

  onCleanup(() => {
    window.removeEventListener("scroll", handleScroll);
  });

  return (
    <section class="hero-section">
      <div class="hero-bg-wrapper">
        <img
          src="/assets/hero_bg.png"
          alt="NatiX Hero Background"
          class="hero-bg-img"
          style={{
            transform: `translateY(${scrollY() * 0.4}px) scale(1.1)`,
            transition: "transform 0.1s ease-out"
          }}
        />
      </div>
      
      <div class="container hero-container">
        <div class="hero-grid">
          <Reveal>
            <div class="hero-content">
              <div class="logo-wrapper">
                <img src="/assets/svg/logosvg.svg" alt="NatiX Logo" class="hero-logo" />
              </div>
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

          <Reveal>
            <div class="hero-illustration-wrapper">
              <img
                src="/assets/hero_illustration.png"
                alt="NatiX ERP Illustration"
                class="hero-illustration"
              />
            </div>
          </Reveal>
        </div>
      </div>
      <div class="hero-wave-silhouette"></div>
    </section>
  );
}

