import logo from "../logo.svg";
const Header = () => {
  return (
    <nav className=" ">
      <img src={logo} className="nav--icon" alt="logo" width="50" />
      <h3 className="nav--logo_text">ReactFacts</h3>
      <h4 className="nav--title"> React Course - Project 1</h4>
    </nav>
  );
};

export default Header;
