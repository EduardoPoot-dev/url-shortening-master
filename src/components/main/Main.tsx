import Form from "./Form.tsx";
import Result from "./Result.tsx";
import { useShorterStore } from "../../store.ts";

export default function Main() {
  const links = useShorterStore((state) => state.links);
  return (
    <main className="main">
      <section className="header__content">
        <div className="header__images">
          <img
            alt="illustration of a person doing home office in front of a desktop computer"
            className="header__img"
            src="/illustration-working.svg"
          />
        </div>

        <h1 className="header__title">More than just shorter links</h1>
        <p className="header__description">
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>

        <a className="header__started" href="#">
          Get Started
        </a>
      </section>

      <Form />
      {links && links.map((link) => <Result key={link.link} link={link} />)}

      <section className="stadistics">
        <h2 className="stadistic__title">Advanced Statistics</h2>
        <h3 className="stadistic__description">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </h3>

        <div className="stadistic__cards">
          <div className="stadistic__card stadistic__card--top">
            <div className="card__imgContainer">
              <img
                src="/icon-brand-recognition.svg"
                alt="icon-brand-recognition"
              />
            </div>
            <h4 className="card__title">Brand Recognition</h4>
            <p className="card__info">
              Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </div>

          <div className="stadistic__card stadistic__card--miiddle">
            <div className="card__imgContainer">
              <img
                src="/icon-detailed-records.svg"
                alt="icon-brand-recognition"
              />
            </div>
            <h4 className="card__title">Detailed Records</h4>
            <p className="card__info">
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>

          <div className="stadistic__card stadistic__card--bottom">
            <div className="card__imgContainer">
              <img
                src="/icon-fully-customizable.svg"
                alt="icon-brand-recognition"
              />
            </div>
            <h4 className="card__title">Fully Customizable</h4>
            <p className="card__info">
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
