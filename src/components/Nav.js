import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

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

        <button
          className="menu__btn menu__btn--open hover_effect"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FaBars />
        </button>
      </nav>

      {menuOpen && (
        <div className="menu__backdrop">
          <button
            className="menu__btn menu__close--btn hover_effect"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <FaTimes />
          </button>

          <div className="menu__links">
            <Link className="menu__link hover_effect link__hover-effect" to="./index.html">
              Home
            </Link>
            <Link className="menu__link hover_effect link__hover-effect" to="./search.html">
              Find a movie!
            </Link>
            <Link className="menu__link link__hover-effect hover_effect no_cursor" to="">
              Contact
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
export default Nav;
