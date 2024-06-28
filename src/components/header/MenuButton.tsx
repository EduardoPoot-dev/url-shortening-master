import MenuMobile from "./MenuMobile.tsx";
import { useShorterStore } from "../../store.ts";
export default function MenuButton() {
  const { isMenuActive, setIsMenuActive } = useShorterStore((state) => ({
    isMenuActive: state.isMenuActive,
    setIsMenuActive: state.setIsMenuActive,
  }));
  return (
    <>
      <button
        aria-label="menu"
        className="header__menuBtn"
        onClick={() => setIsMenuActive(!isMenuActive)}
      >
        <canvas className="menuBtn__span"></canvas>
        <canvas className="menuBtn__span"></canvas>
        <canvas className="menuBtn__span"></canvas>
      </button>

      {isMenuActive && <MenuMobile />}
    </>
  );
}
