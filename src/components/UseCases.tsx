import Reveal from "./Reveal";

export default function UseCases() {
  return (
    <section class="use-cases-section">
      <div class="use-cases-bg-wrapper">
        <img src="/assets/use_cases_city_bg.png" alt="" class="use-cases-bg-img" />
      </div>
      
      <div class="container">
        <Reveal>
          <div class="section-header text-center">
            <h2 class="use-cases-title">
              Satu Platform untuk Berbagai Jenis Lembaga Pendidikan
            </h2>
            <p class="use-cases-subtitle">
              NatiX dirancang fleksibel dan relevan untuk berbagai kebutuhan institusi pendidikan, antara lain:
            </p>
          </div>
        </Reveal>

        <div class="use-cases-horizontal">
          <Reveal delay={100}>
            <article class="use-case-card-horizontal">
              <div class="uc-icon-horizontal">
                <img src="/assets/sekolah_formal.png" alt="Sekolah Formal" />
              </div>
              <h3>Sekolah Formal</h3>
            </article>
          </Reveal>

          <Reveal delay={200}>
            <article class="use-case-card-horizontal">
              <div class="uc-icon-horizontal">
                <img src="/assets/pesantren.png" alt="Pesantren" />
              </div>
              <h3>Pesantren</h3>
            </article>
          </Reveal>

          <Reveal delay={300}>
            <article class="use-case-card-horizontal">
              <div class="uc-icon-horizontal">
                <img src="/assets/boarding_school.png" alt="Boarding School / Asrama" />
              </div>
              <h3>Boarding School /<br/>Asrama</h3>
            </article>
          </Reveal>

          <Reveal delay={400}>
            <article class="use-case-card-horizontal">
              <div class="uc-icon-horizontal">
                <img src="/assets/yayasan.png" alt="Yayasan Pendidikan" />
              </div>
              <h3>Yayasan Pendidikan</h3>
            </article>
          </Reveal>

          <Reveal delay={500}>
            <article class="use-case-card-horizontal">
              <div class="uc-icon-horizontal">
                <img src="/assets/lembaga_nonformal.png" alt="Lembaga Pendidikan Nonformal" />
              </div>
              <h3>Lembaga Pendidikan<br/>Nonformal</h3>
            </article>
          </Reveal>
        </div>

        <Reveal delay={600}>
          <p class="use-cases-closing">
            Tanpa kompleksitas berlebih. Tanpa sistem yang terpisah-pisah.
          </p>
        </Reveal>
      </div>
      <div class="use-cases-wave-silhouette"></div>
    </section>
  );
}
