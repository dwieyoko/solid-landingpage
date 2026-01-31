import { createSignal, onMount, onCleanup } from "solid-js";

export default function StickyHeader() {
  const [visible, setVisible] = createSignal(true);
  const [mobileMenuOpen, setMobileMenuOpen] = createSignal(false);

  const handleScroll = () => {
    setVisible(window.scrollY >= 0);
  };

  onMount(() => {
    window.addEventListener("scroll", handleScroll);
  });

  onCleanup(() => {
    window.removeEventListener("scroll", handleScroll);
  });

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen());
  };

  return (
    <>
      <header class={`sticky-header ${visible() ? "visible" : ""}`}>
        <div class="sticky-header-content">
          <div class="sticky-logo" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <img src="/assets/svg/logosvg.svg" alt="NatiX Logo" class="sticky-logo-img" />
          </div>
          <nav class="sticky-nav">
            <button onClick={() => scrollToSection(".hero-section")}>Beranda</button>
            <button onClick={() => scrollToSection(".challenges-section")}>Tantangan</button>
            <button onClick={() => scrollToSection(".use-cases-section")}>Solusi</button>
            <button onClick={() => scrollToSection(".benefits-section")}>Keunggulan</button>
          </nav>
          <div class="sticky-buttons">
            <a href="#" class="sticky-cta-outline" target="_blank" rel="noopener noreferrer">Login</a>
          </div>
          
          {/* Hamburger Button */}
          <button 
            class={`hamburger-btn ${mobileMenuOpen() ? "open" : ""}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        class={`mobile-menu-overlay ${mobileMenuOpen() ? "open" : ""}`}
        onClick={() => setMobileMenuOpen(false)}
      ></div>

      {/* Mobile Menu Drawer */}
      <div class={`mobile-menu ${mobileMenuOpen() ? "open" : ""}`}>
        <div class="mobile-menu-header">
          <img src="/assets/svg/logosvg.svg" alt="NatiX Logo" class="mobile-menu-logo-img" />
          <button class="mobile-menu-close" onClick={() => setMobileMenuOpen(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <nav class="mobile-menu-nav">
          <button onClick={() => scrollToSection(".hero-section")}>Beranda</button>
          <button onClick={() => scrollToSection(".challenges-section")}>Tantangan</button>
          <button onClick={() => scrollToSection(".use-cases-section")}>Solusi</button>
          <button onClick={() => scrollToSection(".benefits-section")}>Keunggulan</button>
        </nav>
        <div class="mobile-menu-buttons">
          <a href="#" class="mobile-cta-outline" target="_blank" rel="noopener noreferrer">Login</a>
        </div>
      </div>
    </>
  );
}
