import { React, useRef, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import "./Header.scss";
import logo from "../../assets/SP-FILM-LGO.png";
import Button from "../button/Button";

const headerNav = [
  {
    display: "Home",
    path: "/",
  },
  {
    display: "Movies",
    path: "/movie",
  },
  {
    display: "TV Series",
    path: "/tv",
  },
];

function Header() {
  const { pathname } = useLocation();
  const headerRef = useRef(null);

  const active = headerNav.findIndex((e) => e.path === pathname);
  const [activeMobile, setActiveMobile] = useState(false);
  const closeNav = () => setActiveMobile(false);
  // const [changeIconNav, setChangeIconNav] = useState(false);

  // const showButtonNavMobile = () => {
  //   if (window.innerWidth <= 960) {
  //     setActiveMobile(true);
  //   } else {
  //     setActiveMobile(false);
  //   }
  // };

  const toggleShowNav = () => {
    setActiveMobile(!activeMobile);
  };

  // useEffect(() => {
  //   showButtonNavMobile();
  // }, []);

  // window.addEventListener("resize", showButtonNavMobile);
  useEffect(() => {
    const shrinkHeader = () => {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        headerRef.current.classList.add("shrink");
      } else {
        headerRef.current.classList.remove("shrink");
      }
    };
    window.addEventListener("scroll", shrinkHeader);
    return () => {
      window.removeEventListener("scroll", shrinkHeader);
    };
  }, []);
  return (
    <div ref={headerRef} className="header">
      <div
        className={`header__wrap ${
          activeMobile ? "active-wrap" : ""
        } container`}
      >
        <div className="header__logo">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="menu-icon" onClick={toggleShowNav}>
          <i className={activeMobile ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={`header__nav ${activeMobile ? "active-nav" : ""}`}>
          {headerNav.map((e, i) => (
            <li
              key={i}
              className={`header__nav-item ${i === active ? "active" : ""}`}
              onClick={closeNav}
            >
              <Link to={e.path} className="header__nav-link">
                {e.display}
              </Link>
            </li>
          ))}
          <Button
            buttonStyle="btn--primary"
            buttonSizes="btn--medium"
            pathName="/sign-up"
            type="sign-up"
          >
            SIGN UP
          </Button>
        </ul>
      </div>
    </div>
  );
}

export default Header;
