import MenuButton from "./MenuButton.tsx";
import NavForm from "./NavForm.tsx";
import Nav from "./Nav.tsx";
export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__navbar">
          <img src="/logo.svg" alt="logo" />
          <MenuButton />
          <Nav />
          <NavForm />
        </div>
      </div>
    </header>
  );
}
