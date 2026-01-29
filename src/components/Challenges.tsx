import Reveal from "./Reveal";

export default function Challenges() {
  return (
    <section class="challenges-section">
      <div class="challenges-bg-wrapper">
        <img
          src="/assets/challenges_city_bg.png"
          alt="City Skyline Background"
          class="challenges-bg-img"
        />
      </div>
      <div class="challenges-gradient-overlay"></div>

      <div class="container challenges-container">
        <Reveal>
          <div class="section-header text-center">
            <h2 class="challenges-title">Tantangan Umum Lembaga Pendidikan Saat Ini</h2>
            <p class="challenges-subtitle">
              Banyak lembaga pendidikan masih menghadapi kendala klasik yang
              menghambat kinerja dan transparansi.
            </p>
          </div>
        </Reveal>

        <div class="challenges-grid">
          <Reveal delay={200}>
            <div class="challenges-cards">
              <article class="challenge-card">
                <div class="card-icon icon-blue">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
                </div>
                <h3>Data tersebar &<br/>tidak sinkron</h3>
              </article>
              <article class="challenge-card">
                <div class="card-icon icon-orange">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                </div>
                <h3>Administrasi manual<br/>yang melelahkan</h3>
              </article>
              <article class="challenge-card">
                <div class="card-icon icon-green">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
                </div>
                <h3>Monitoring siswa<br/>belum real-time</h3>
              </article>
              <article class="challenge-card">
                <div class="card-icon icon-red">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                </div>
                <h3>Laporan lambat<br/>& rawan kesalahan</h3>
              </article>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <div class="challenges-dashboard-preview">
              <img
                src="/assets/dashboard_laptop_phone.png"
                alt="Dashboard Preview"
                class="dashboard-img-actual"
              />
            </div>
          </Reveal>
        </div>

        <Reveal delay={600}>
          <div class="challenges-footer text-center">
            <p class="challenges-closing-text">
              Akibatnya, pengelolaan menjadi tidak efisien dan sulit dikembangkan.
            </p>
          </div>
        </Reveal>
      </div>
      <div class="challenges-wave-silhouette"></div>
    </section>
  );
}

