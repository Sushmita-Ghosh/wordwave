import logo from "../assets/talk.png";
const Header = () => {
  return (
    <section className="header">
      <nav className="py-5 px-5 flex flex-row items-center justify-between">
        <div className="flex flex-row items-center justify-center">
          <span>
            <img src={logo} alt="Logo" className="w-8 h-8 mr-2" />
          </span>
          <span className="text-2xl font-bold">Word Wave</span>
        </div>
      </nav>
    </section>
  );
};

export default Header;
