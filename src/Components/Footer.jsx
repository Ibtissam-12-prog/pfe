import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer__container">
          <div className="footer__grid">
            {/* Brand */}
            <div className="footer__brand">
              <h3 className="footer__logo">B-Easy</h3>
              <p className="footer__desc">
                Connecting you with authentic Moroccan craftsmanship. Each piece tells a
                story of tradition, skill, and cultural heritage passed down through generations.
              </p>
              <div className="footer__socials">
                <button className="social social--primary" aria-label="Facebook">f</button>
                <button className="social social--secondary" aria-label="X / Twitter">@</button>
                <button className="social social--accent" aria-label="LinkedIn">in</button>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer__col">
              <h4 className="footer__title">Shop</h4>
              <ul className="footer__links">
                <li><a href="#">Carpets & Rugs</a></li>
                <li><a href="#">Pottery & Ceramics</a></li>
                <li><a href="#">Leather Goods</a></li>
                <li><a href="#">Jewelry</a></li>
                <li><a href="#">Textiles</a></li>
                <li><a href="#">Custom Orders</a></li>
              </ul>
            </div>

            {/* Support */}
            <div className="footer__col">
              <h4 className="footer__title">Support</h4>
              <ul className="footer__links">
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Shipping Info</a></li>
                <li><a href="#">Returns</a></li>
                <li><a href="#">Size Guide</a></li>
                <li><a href="#">Care Instructions</a></li>
                <li><a href="#">FAQ</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="footer__bottom">
            <p className="footer__copy">
              © 2025 Artisan Morocco. Preserving heritage, one handcrafted piece at a time.
            </p>
            <div className="footer__policies">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>

      {/* CSS inside the same file */}
      <style>{`
        .footer {
          background-color: #111827;
          color: #ffffff;
          padding: 4rem 1rem;
        }
        .footer__container {
          max-width: 1120px;
          margin: 0 auto;
        }
        .footer__grid {
          display: grid;
          gap: 2rem;
          margin-bottom: 3rem;
        }
        @media (min-width: 768px) {
          .footer__grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 1024px) {
          .footer__grid { grid-template-columns: repeat(4, 1fr); }
          .footer__brand { grid-column: span 2; }
        }
        .footer__logo {
  font-size: 1.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
  background-image: linear-gradient(
    135deg,
    hsla(15, 75%, 55%, 0.5) 0%,
    hsla(45, 31%, 95%, 1.00) 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
        .footer__desc {
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 1.5rem;
          line-height: 1.7;
          max-width: 36rem;
        }
        .footer__socials {
          display: flex;
          gap: 0.75rem;
        }
        .social {
          width: 40px;
          height: 40px;
          border-radius: 999px;
          border: none;
          cursor: pointer;
          font-weight: 700;
          color: #fff;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: 0.2s ease;
        }
        .social:hover { filter: brightness(1.05); transform: translateY(-1px); }
        .social--primary { background-color: #2563eb; }
        .social--secondary { background-color: #7c3aed; }
        .social--accent { background-color: blue; }
        .footer__title {
          color: #ffffff;
          font-size: 1.125rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }
        .footer__links {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .footer__links li { margin: 0.4rem 0; }
        .footer__links a {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .footer__links a:hover { color: hsl(15, 75%, 55%); }
        .footer__bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.2);
          padding-top: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        @media (min-width: 768px) {
          .footer__bottom {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
          }
        }
        .footer__copy {
          margin: 0;
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.9rem;
        }
        .footer__policies {
          display: flex;
          gap: 1.25rem;
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.9rem;
        }
        .footer__policies a {
          color: inherit;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .footer__policies a:hover { color: hsl(15, 75%, 55%); }
      `}</style>
    </>
  );
};

export default Footer;
