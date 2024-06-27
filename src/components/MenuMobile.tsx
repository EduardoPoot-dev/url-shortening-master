

export default function MenuMobile() {
  return (
    <nav className='menuMobile'>
      <ul className="menuMobile__top">
        <li>
          <a className="menuMobile__link" href="#">Features</a>
        </li>

        <li>
          <a className="menuMobile__link" href="#">Pricing</a>
        </li>

        <li>
          <a className="menuMobile__link" href="#">Resourses</a>
        </li>
      </ul>

      <ul className="menuMobile__bottom">
        <li>
          <a className="menuMobile__link" href="#">Login</a>
        </li>

        <li>
          <a className="menuMobile__sign" href="#">Sign Up</a>
        </li>
      </ul>
    </nav>
  )
}

