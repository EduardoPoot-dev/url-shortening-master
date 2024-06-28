export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__logoContainer">Shortly</div>

        <div className="footer__links">
          <nav className="footer__column">
            <h4 className="footer__title">Features</h4>
            <a className="footer__link" href="#">
              Link Shortening
            </a>
            <a className="footer__link" href="#">
              Branded Links
            </a>
            <a className="footer__link" href="#">
              Analytics
            </a>
          </nav>

          <nav className="footer__column">
            <h4 className="footer__title">Resources</h4>
            <a className="footer__link" href="#">
              Blog
            </a>
            <a className="footer__link" href="#">
              Developers
            </a>
            <a className="footer__link" href="#">
              Support
            </a>
          </nav>

          <nav className="footer__column">
            <h4 className="footer__title">Company</h4>
            <a className="footer__link" href="#">
              About
            </a>
            <a className="footer__link" href="#">
              Our Team
            </a>
            <a className="footer__link" href="#">
              Careers
            </a>
            <a className="footer__link" href="#">
              Contact
            </a>
          </nav>

          <div className="footer__column footer__column--logos">
            <a className="footer__logoLink" href="#">
              <img src="/icon-facebook.svg" alt="icon-facebook" />
            </a>
            <a className="footer__logoLink" href="#">
              <img src="/icon-twitter.svg" alt="icon-twitter" />
            </a>
            <a className="footer__logoLink" href="#">
              <img src="/icon-instagram.svg" alt="icon-instagram" />
            </a>
            <a className="footer__logoLink" href="#">
              <img src="/icon-pinterest.svg" alt="icon-pinterest" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
