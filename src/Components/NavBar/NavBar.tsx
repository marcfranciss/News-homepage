import navLogo from "../../assets/images/logo.svg";
import burgerBtn from "../../assets/images/icon-menu.svg";
import closeBtn from "../../assets/images/icon-menu-close.svg";
import "./navbar.sass";
import { useState } from "react";

const navArr = ["home", "new", "popular", "trending", "categories"];

const NavBar = () => {
  const [isCollapse, setIsCollapse] = useState<boolean>(false);
  return (
    <nav>
      <div className='nav-container' role='navigation'>
        <div className='logo-container'>
          <img src={navLogo} alt='' />
        </div>
        <ul className='main-nav'>
          {navArr.map((arr) => {
            return (
              <li key={arr}>
                <a href={`#${arr}`} className='text-body nav-links'>
                  {arr}
                </a>
              </li>
            );
          })}
        </ul>
        <button
          type='button'
          className='navbar-toggler'
          aria-controls='mobile-nav'
          aria-expanded={isCollapse}
          aria-label='Toggle navigation'
          onClick={() => setIsCollapse(!isCollapse)}>
          <img src={burgerBtn} alt='' />
        </button>
      </div>
      <dialog
        id='mobile-nav'
        className={`links-container  ${isCollapse ? "open" : ""}`}
        aria-live='polite'
        aria-atomic={isCollapse}>
        <div className='mobile-nav'>
          <button
            type='button'
            className='close-nav'
            onClick={() => setIsCollapse(false)}
            aria-controls='mobile-nav'
            aria-expanded={isCollapse}
            aria-label='Close navigation'>
            <img src={closeBtn} alt='' />
          </button>
          <ul>
            {navArr.map((arr) => {
              return (
                <li key={arr}>
                  <a
                    href={`#${arr}`}
                    className='heading-xs nav-links'
                    onClick={() => setIsCollapse(false)}>
                    {arr}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </dialog>
    </nav>
  );
};

export default NavBar;
