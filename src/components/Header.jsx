import Logo from "../assets/img/logo.png";
import ButtonSidebar from "../assets/svg/hamburger-button.svg";

const Header = () => {
  return (
    <header className="flex h-16 items-center justify-between px-4">
      <div className="flex items-center gap-4">
        <img src={Logo} alt="logo" className="h-7" />
        <h3 className="text-primary text-2xl font-bold">Alarado</h3>
      </div>

      <button className="hover:bg-primary/10 rounded-xl p-1">
        <img src={ButtonSidebar} alt="button" />
      </button>
    </header>
  );
};

export default Header;
