import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <nav>
        <Link to="/" className="nav__logo--container">
          <figure className="nav__logo--figure">
            <img src="/compass.png" alt="" className="logo__img click" />
          </figure>
          <h4 className="nav__logo--name click">Movie Finder</h4>
        </Link>

        <ul className="nav__link--list">
          <li>
            <Link to="/" className="nav__link link__hover-effect">
              Home
            </Link>
          </li>
          <li>
            <Link to="./search" className="nav__link link__hover-effect">
              Find a movie!
            </Link>
          </li>
          <li>
            <Link to="#" className="nav__link link__hover-effect no_cursor">
              Contact
            </Link>
          </li>
        </ul>

        <button className="menu__btn menu__btn--open"
        // onClick={openMenu()}
        >
          <FaBars />
        </button>
      </nav>

      <div className="menu__backdrop">
        <button className="menu__btn menu__close--btn"
        // onClick={closeMenu()}
        >
          <FaTimes />
        </button>

        <div className="menu__links">
          <Link className="menu__link" to="./index.html">
            Home
          </Link>
          <Link className="menu__link" to="./search.html">
            Find a movie!
          </Link>
          <Link className="menu__link" to="">
            Contact
          </Link>
        </div>
      </div>
    </>
  );
}
export default Nav;
