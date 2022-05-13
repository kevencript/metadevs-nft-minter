import icon from "../../img/logo.png";
import "./style.css";

const header = () => {
  return (
    <div id="header">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <img className="logo" src={icon} />
          <a
            className="navbar-brand"
            onClick={(e) => {
              e.preventDefault();
              window.open("https://metadevs.com.br", "_self");
            }}
          >
            <span>Metadevs Brasil 🇧🇷</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <span></span>
                </a>
              </li>

              <li className="nav-item active">
                <a className="nav-link" href="#">
                  <span></span>
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#"></a>
              </li>
            </ul>
            <span className="navbar-text float-right">
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(
                        "https://www.youtube.com/c/Kevencript",
                        "_blank"
                      );
                    }}
                  >
                    <span>Youtubefhrf</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(
                        "https://www.instagram.com/metadevsbrasil/",
                        "_self"
                      );
                    }}
                  >
                    Instagram
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link"
                    onClick={(e) => {
                      e.preventDefault();
                      window.open("https://metadevs.com.br", "_self");
                    }}
                  >
                    Sobre
                  </a>
                </li>
              </ul>
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default header;
