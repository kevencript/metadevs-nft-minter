import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

class Footer extends Component {
  // JSX stuff
  render() {
    return (
      <section id="footer">
        <footer className="page-footer">


          {/* Copyright */}
          <div className="footer-copyright text-center">
            <span className="">Participe da Comunidade: www.metadevs.com.br </span>
          </div>
          {/* Copyright */}
        </footer>
      </section>
    );
  }
}

export default Footer;