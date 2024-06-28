import { bottomLinks, topLinks } from "../../data/data.ts";

export default function MenuMobile() {
  return (
    <nav className="menuMobile">
      <ul className="menuMobile__top">
        {topLinks.map((link) => (
          <li>
            <a className="menuMobile__link" href="#">
              {link}
            </a>
          </li>
        ))}
      </ul>

      <ul className="menuMobile__bottom">
        {bottomLinks.map((link) => (
          <li>
            <a className={link.class} href="#">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
