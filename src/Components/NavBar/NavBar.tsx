import navLogo from "../../assets/images/logo.svg";
import "./navbar.sass";

type Props = {};

const NavBar = (props: Props) => {
  return (
    <nav>
      <div className='nav-container' role='navigation'>
        <div className='logo-container'>
          <img src={navLogo} alt='' />
        </div>
        <div className='links-container'>
          <ul>
            <li>
              <a href='#home'>Home</a>
            </li>
            <li>
              <a href='#new'>New</a>
            </li>
            <li>
              <a href='#popular'>Popular</a>
            </li>
            <li>
              <a href='#trending'>Trending</a>
            </li>
            <li>
              <a href='#categories'>Categories</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
