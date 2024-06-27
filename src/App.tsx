import { useState } from "react"
import MenuMobile from "./components/MenuMobile"
import Form from "./components/Form"
import Result from "./components/Result"
import { useShorterStore } from "./store"


function App() {
  const [isMenuAvctive, setIsMenuActive] = useState(false)

  const links = useShorterStore(state => state.links)

  return (
    <>
      <header className="header">
        <div className="header__container">
          <div className="header__navbar">
            <img src="/logo.svg" alt="logo" />

            <button className="header__menuBtn" onClick={() => setIsMenuActive(!isMenuAvctive)}>
              <span className="menuBtn__span"></span>
              <span className="menuBtn__span"></span>
              <span className="menuBtn__span"></span>
            </button>

            {isMenuAvctive && <MenuMobile />}

            <nav className="header__menu">
              <ul className="menu__left">
                <li>
                  <a className="menu__link" href="#">Features</a>
                </li>

                <li>
                  <a className="menu__link" href="#">Pricing</a>
                </li>

                <li>
                  <a className="menu__link" href="#">Resourses</a>
                </li>
              </ul>

              <ul className="menu__right">
                <li>
                  <a className="menu__link" href="#">Login</a>
                </li>

                <li>
                  <a className="menu__sign" href="#">Sign Up</a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="header__content">

            <div className="header__images">
              <img className="header__img" src="/illustration-working.svg" />
            </div>

            <h1 className="header__title">More than just shorter links</h1>
            <h3 className="header__description">Build your brand’s recognition and get detailed insights
              on how your links are performing.</h3>

            <a className="header__started" href="#">Get Started</a>
          </div>
        </div>
      </header>

      <main className="main">
        <Form />
        {links && links.map(link => (
          <Result key={link.link} link={link}/>
        ))}
      </main>

      <section className="stadistics">
        <h2 className="stadistic__title">Advanced Statistics</h2>
        <h3 className="stadistic__description">Track how your links are performing across the web with our
          advanced statistics dashboard.</h3>

        <div className="stadistic__cards">
          <div className="stadistic__card stadistic__card--top">
            <div className="card__imgContainer">
              <img src="/icon-brand-recognition.svg" alt="icon-brand-recognition" />
            </div>
            <h4 className="card__title">Brand Recognition</h4>
            <p className="card__info">Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instil confidence in your content.</p>
          </div>

          <div className="stadistic__card stadistic__card--miiddle">
            <div className="card__imgContainer">
              <img src="/icon-detailed-records.svg" alt="icon-brand-recognition" />
            </div>
            <h4 className="card__title">Detailed Records</h4>
            <p className="card__info">Gain insights into who is clicking your links. Knowing when and where
              people engage with your content helps inform better decisions.</p>
          </div>

          <div className="stadistic__card stadistic__card--bottom">
            <div className="card__imgContainer">
              <img src="/icon-fully-customizable.svg" alt="icon-brand-recognition" />
            </div>
            <h4 className="card__title">Fully Customizable</h4>
            <p className="card__info">Improve brand awareness and content discoverability through customizable
              links, supercharging audience engagement.</p>
          </div>
        </div>
      </section>

      <section className="boost">
        <img className="bgBoost__desktop" src="/bg-boost-desktop.svg" alt="bg-boost-desktop" />
        <img className="bgBoost__mobile" src="/bg-boost-mobile.svg" alt="bg-boost-mobile" />

        <div className="boost__container">
          <h2 className="boost__title">Boost your links today</h2>
          <a href="#" className="boost__link">Get Started</a>
        </div>
      </section>

      <footer className="footer">
        <div className="footer__container">
          <div className="footer__logoContainer">
            Shortly
          </div>

          <div className="footer__links">
            <nav className="footer__column">
              <h4 className="footer__title">Features</h4>
              <a className="footer__link" href="#">Link Shortening</a>
              <a className="footer__link" href="#">Branded Links</a>
              <a className="footer__link" href="#">Analytics</a>
            </nav>

            <nav className="footer__column">
              <h4 className="footer__title">Resources</h4>
              <a className="footer__link" href="#">Blog</a>
              <a className="footer__link" href="#">Developers</a>
              <a className="footer__link" href="#">Support</a>
            </nav>

            <nav className="footer__column">
              <h4 className="footer__title">Company</h4>
              <a className="footer__link" href="#">About</a>
              <a className="footer__link" href="#">Our Team</a>
              <a className="footer__link" href="#">Careers</a>
              <a className="footer__link" href="#">Contact</a>
            </nav>

            <nav className="footer__column footer__column--logos">
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
            </nav>
          </div>
        </div>
      </footer>






    </>
  )
}

export default App
