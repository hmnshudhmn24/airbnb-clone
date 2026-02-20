import React from "react";

/**
 * Footer component with links and information
 */
function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-content">
        <div>
          <h3 className="footer-section-title">Support</h3>
          <div className="footer-links">
            <a href="#help" className="footer-link">
              Help Center
            </a>
            <a href="#safety" className="footer-link">
              Safety information
            </a>
            <a href="#cancellation" className="footer-link">
              Cancellation options
            </a>
            <a href="#support" className="footer-link">
              Support for disabilities
            </a>
          </div>
        </div>

        <div>
          <h3 className="footer-section-title">Community</h3>
          <div className="footer-links">
            <a href="#disaster" className="footer-link">
              Disaster relief
            </a>
            <a href="#inclusion" className="footer-link">
              Combating discrimination
            </a>
          </div>
        </div>

        <div>
          <h3 className="footer-section-title">Hosting</h3>
          <div className="footer-links">
            <a href="#host" className="footer-link">
              Try hosting
            </a>
            <a href="#resources" className="footer-link">
              Resources
            </a>
            <a href="#community" className="footer-link">
              Community forum
            </a>
            <a href="#responsible" className="footer-link">
              Responsible hosting
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div>© 2026 Airbnb Clone. All rights reserved.</div>
        <div style={{ display: "flex", gap: "16px" }}>
          <a href="#privacy" className="footer-link">
            Privacy
          </a>
          <a href="#terms" className="footer-link">
            Terms
          </a>
          <a href="#sitemap" className="footer-link">
            Sitemap
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
