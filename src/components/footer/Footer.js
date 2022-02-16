import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

import bg from "../../assets/footer-bg.jpg";
import logo from "../../assets/SP-FILM-LGO.png";

function Footer() {
  return (
    <div className="footer" style={{ backgroundImage: `url(${bg})` }}>
      <div className="footer__content container">
        <div className="footer__content__logo">
          <Link to={"/"} className="logo-link" style={{ cursor: "pointer" }}>
            <img className="logo" src={logo} alt="logo" />
          </Link>
        </div>
        <div className="footer__content__menus">
          <div className="footer__content__menu">
            <Link to={"/"}>Home</Link>
            <Link to={"/"}>Contact us</Link>
            <Link to={"/"}>Term of services</Link>
            <Link to={"/"}>About us</Link>
          </div>
          <div className="footer__content__menu">
            <Link to={"/"}>Live</Link>
            <Link to={"/"}>FAQ</Link>
            <Link to={"/"}>Premium</Link>
            <Link to={"/"}>Pravacy policy</Link>
          </div>
          <div className="footer__content__menu">
            <Link to={"/"}>You must watch</Link>
            <Link to={"/"}>Recent release</Link>
            <Link to={"/"}>Top IMDB</Link>
          </div>
        </div>
      </div>
      <div className="footer__contact-info">
        <span>@ Xuan Truong99</span>
        <div className="footer__contact-link">
          <span>Nếu có bất cứ vấn đề nào về bản quyền vui lòng liên hệ:</span>
          <a href="https://www.facebook.com/taotruong999/" target="_black">
            Facebook
          </a>
          <a href="https://www.instagram.com/imtruong_/" target="_black">
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
