import Reveal from "./Reveal";

export default function Benefits() {
  return (
    <section class="benefits-section">
      <div class="benefits-bg-left"></div>
      <div class="benefits-bg-right"></div>
      
      <div class="container benefits-content">
        <Reveal>
          <div class="section-header text-center">
            <h2 class="benefits-title">Lebih dari Sekadar Platform</h2>
            <p class="benefits-subtitle">
              NatiX bukan hanya software, tetapi mitra transformasi digital lembaga
              pendidikan.
            </p>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div class="benefits-list">
            <div class="benefit-item">
              <span class="check-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-check"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </span>
              <span>Membantu pengelola fokus pada visi pendidikan.</span>
            </div>
            <div class="benefit-item">
              <span class="check-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-check"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </span>
              <span>Menciptakan transparansi dan kepercayaan.</span>
            </div>
            <div class="benefit-item">
              <span class="check-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-check"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </span>
              <span>Menjadi fondasi pertumbuhan jangka panjang.</span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={400}>
          <p class="text-center mt-2 tagline-2">
            Teknologi yang bekerja untuk manusia, bukan sebaliknya.
          </p>
        </Reveal>
      </div>
      <div class="benefits-wave-silhouette"></div>
    </section>
  );
}
