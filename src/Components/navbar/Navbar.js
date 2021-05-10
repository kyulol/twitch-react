import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import twitchLogoWhite from '../../assets/images/logos/twitchWhite.svg';
import search from '../../assets/images/icons/search.svg';
// import openMenuWhite from '../../assets/images/icons/menuMbl/openMenuWhite.svg';
// import closeMenuWhite from '../../assets/images/icons/menuMbl/closeMenuWhite.svg';



export default function Navbar() {

  const [searchInput, setSearchInput] = useState('');

  // open close mobile menu
  const [toggleMobileMenu, setToggleMobileMenu] = useState(false);
  const changeMenuState = () => {
    setToggleMobileMenu(!toggleMobileMenu);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const handleKeyPress = (e) => {
    setSearchInput(e.target.value);
  }

  const [outLineInput, setoutLineInput] = useState(false);
  const changeState = () => {
    setoutLineInput(!outLineInput);
  };

  return (
    <>
      
      {/* menu non responsive */}
      <nav className="navbar">

        <ul className="nav-ul">

          {/* Logo twitch clickable to return home */}
          <li className="nav-li">
            <Link to="/">
              <img className="logo-twitch w-8" src={twitchLogoWhite} alt="twitch Logo"/>
            </Link>
          </li>

          {/* go to Top games */}
          <li className="nav-li">
            <NavLink exact activeClassName="active" to="/">
              Top Jeux
            </NavLink>
          </li>

          {/* go to top streamers */}
          <li className="nav-li">
            <NavLink exact activeClassName="active" to="/top-streams">
              Top Streamers
            </NavLink>
          </li>
        </ul>

        <div className={`div-search ${outLineInput ? 'test' : null}`}>
          <form className="form-search" onSubmit={handleSubmit}>
            <input required value={searchInput} onChange={(e) => handleKeyPress(e)} onClick={changeState} type="text" className="input-search"/>
            <Link className="flex items-center" to={{pathname: `search-results/${searchInput}`}}>
              <button type="submit" className="btn-submit ">
                <img className="search-icon" src={search} alt="search Icon" srcSet=""/>
              </button>
            </Link>
          </form>
        </div>

        
      </nav>

      {/* menu responsive */}
      
      <div className="navbarMbl hidden">
        <Link to="/">
          <img className="logoTwitchMbl w-8 z-40 relative" src={twitchLogoWhite} alt="twitch Logo"/>
        </Link>

        <button onClick={changeMenuState} className={`boxMenu z-40 ${toggleMobileMenu ? 'iconClose' : 'iconMenu'}`}>
          <div className="containerLines pointer-events-none h-5 w-7">
            <div className="lines"></div>
            <div className="lines"></div>
            <div className="lines"></div>
          </div>

          {/* <img className="hamburgerIcon relative z-40 w-8 h-8" src={toggleMobileMenu ? closeMenuWhite : openMenuWhite} alt="icone ouvrir ou fermer menu responsive"/> */}
        </button>
      </div>

      <div className={`menuMbl ${toggleMobileMenu ? 'menuMblOpen' : 'menuMblClose'}`}>
        <ul className="nav-ul mt-12">

          {/* go to Top games */}
          <li className="nav-li">
            <NavLink exact activeClassName="active" to="/">
              Top Jeux
            </NavLink>
          </li>

          <hr className="styleWhite" />

          {/* go to top streamers */}
          <li className="nav-li">
            <NavLink exact activeClassName="active" to="/top-streams">
              Top Streamers
            </NavLink>
          </li>
        </ul>

      </div>
    </>
  )
}
