import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="brand">
          <img
            src="/brand/sct-sb-white.png"
            alt="IEEE SCT Student Branch"
          />

          <a href="#top" className="logo" onClick={closeMenu}>
            DHYUTHI <span>7.0</span>
          </a>
        </div>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#events">Events</a>
          <a href="#tracks">Tracks</a>
          <a href="#schedule">Schedule</a>
        </div>

        <button
          className="menu-button"
          aria-label="Open navigation menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="mobile-menu">
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#events" onClick={closeMenu}>Events</a>
          <a href="#tracks" onClick={closeMenu}>Tracks</a>
          <a href="#schedule" onClick={closeMenu}>Schedule</a>
          <a href="#pre-events" onClick={closeMenu}>Pre-Events</a>
          <a href="#gallery" onClick={closeMenu}>Gallery</a>
          <a href="#faq" onClick={closeMenu}>FAQ</a>
          <a href="#venue" onClick={closeMenu}>Venue</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </div>
      )}
    </>
  );
}

export default Navbar;