import React from "react";
import FooterLogo from "../img/logo-green-2x.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo-box">
        <img src={FooterLogo} alt="footer logo" className="footer__logo" />
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <div className="footer__navigation">
            <ul className="footer__list">
              <li className="footer__item">
                <a href="/" className="footer__link">
                  Company
                </a>
              </li>
              <li className="footer__item">
                <a href="/" className="footer__link">
                  Contact us
                </a>
              </li>
              <li className="footer__item">
                <a href="/" className="footer__link">
                  carreers
                </a>
              </li>
              <li className="footer__item">
                <a href="/" className="footer__link">
                  Privacy policy
                </a>
              </li>
              <li className="footer__item">
                <a href="/" className="footer__link">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-1-of-2">
          <p className="footer__copyright">
            Built by &nbsp;
            <a href="/" className="footer__link">
              Lexx Solutions
            </a>
            &nbsp; with Love and React. Copyright &copy;
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
