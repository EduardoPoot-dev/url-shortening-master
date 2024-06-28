export default function Boost() {
  return (
    <section className="boost">
      <img
        className="bgBoost__desktop"
        src="/bg-boost-desktop.svg"
        alt="bg-boost-desktop"
      />
      <img
        className="bgBoost__mobile"
        src="/bg-boost-mobile.svg"
        alt="bg-boost-mobile"
      />

      <div className="boost__container">
        <h2 className="boost__title">Boost your links today</h2>
        <a href="#" className="boost__link">
          Get Started
        </a>
      </div>
    </section>
  );
}
