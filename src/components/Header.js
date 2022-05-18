import logo from "../logo.svg";
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <a className="navbar-brand app-link" href="https://reactjs.org">
          <img src={logo} className="App-logo" alt="logo" width="50" />
          <span>ReactFacts</span>
        </a>
        <button
          className="navbar-toggler border border-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon "></span>
        </button>
        <div
          className="collapse navbar-collapse position-relative"
          id="navbarNav"
        >
          <ul className="nav m-lg-auto">
            <li className="nav-item ">
              <a className="nav-link active" aria-current="page" href="/home">
                React Course - Project 1
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
