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
        <div className='main-nav'>
          <ul>
            {navArr.map((arr) => {
              return (
                <li key={arr}>
                  <a href={`#${arr}`} className='text-body'>
                    {arr}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
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
        className={`links-container  ${isCollapse && "collapse"}`}
        aria-live='polite'
        aria-atomic={isCollapse}>
        <ul>
          <button
            type='button'
            className='close-nav'
            onClick={() => setIsCollapse(false)}
            style={{ alignSelf: "flex-end" }}
            aria-controls='mobile-nav'
            aria-expanded={isCollapse}
            aria-label='Close navigation'>
            <img src={closeBtn} alt='' />
          </button>
          {navArr.map((arr) => {
            return (
              <li key={arr}>
                <a href={`#${arr}`} className='heading-xs'>
                  {arr}
                </a>
              </li>
            );
          })}
        </ul>
      </dialog>
    </nav>
  );
};

export default NavBar;
