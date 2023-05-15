import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <nav>
        <Link to="/" class="nav__logo--container">
          <figure class="nav__logo--figure">
            <img
              src="compass.png"
              alt=""
              class="logo__img click"
            />
          </figure>
          <h4 class="nav__logo--name click">
            Movie Finder
          </h4>
        </Link>

        <ul class="nav__link--list">
          <li>
            <Link to="/" class="nav__link link__hover-effect">
              Home
            </Link>
          </li>
          <li>
            <Link to="./search" class="nav__link link__hover-effect">
              Find a movie!
            </Link>
          </li>
          <li>
            <Link to="#" class="nav__link link__hover-effect no_cursor">
              Contact
            </Link>
          </li>
        </ul>

        <button class="menu__btn menu__btn--open" onclick="openMenu()">
          <FaBars/>
        </button>
      </nav>

      <div class="menu__backdrop">
        <button class="menu__btn menu__close--btn" onclick="closeMenu()">
          <FaTimes/>
        </button>

        <div class="menu__links">
          <Link class="menu__link" to="./index.html">
            Home
          </Link>
          <Link class="menu__link" to="./search.html">
            Find a movie!
          </Link>
          <Link class="menu__link" to="">
            Contact
          </Link>
        </div>
      </div>
    </>
  );
}
export default Nav;
