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
              onclick="goHome()"
            />
          </figure>
          <h4 class="nav__logo--name click" onclick="goHome()">
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
          <i class="fas fa-bars"></i>
        </button>
      </nav>

      <div class="menu__backdrop">
        <button class="menu__btn menu__close--btn" onclick="closeMenu()">
          <i class="fa fa-times"></i>
        </button>

        <div class="menu__links">
          <a class="menu__link" href="./index.html">
            Home
          </a>
          <a class="menu__link" href="./search.html">
            Find a movie!
          </a>
          <a class="menu__link" href="">
            Contact
          </a>
        </div>
      </div>
    </>
  );
}
export default Nav;
