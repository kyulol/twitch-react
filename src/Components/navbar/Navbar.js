import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import twitchLogoWhite from '../../assets/images/logos/twitchWhite.svg';
import search from '../../assets/images/icons/search.svg';
import openMenuWhite from '../../assets/images/icons/menuMbl/openMenuWhite.svg';
import closeMenuWhite from '../../assets/images/icons/menuMbl/closeMenuWhite.svg';



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

          <li className="nav-li">
            <Link to="/">
              <img className="logo-twitch w-8" src={twitchLogoWhite} alt="twitch Logo"/>
            </Link>
            
          </li>

          <li className="nav-li">
            <NavLink exact activeClassName="active" to="/">
              Top Jeux
            </NavLink>
          </li>

          <li className="nav-li">
            <NavLink exact activeClassName="active" to="/top-streams">
              Top Streamers
            </NavLink>
          </li>
        </ul>

        <div className={`div-search ${outLineInput ? 'ring-2 ring-black rounded-md' : null}`}>
          <form className="form-search" onSubmit={handleSubmit}>
            <input required value={searchInput} onChange={(e) => handleKeyPress(e)} onClick={changeState} type="text" className="input-search"/>
            <Link to={{pathname: `search-results/${searchInput}`}}>
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
          <img className="logoTwitchMbl w-8" src={twitchLogoWhite} alt="twitch Logo"/>
        </Link>
        <button onClick={changeMenuState} className="focus:outline-none">
          <img className="hamburgerIcon relative z-40 w-8 h-8" src={toggleMobileMenu ? closeMenuWhite : openMenuWhite} alt="icone ouvrir ou fermer menu responsive"/>
        </button>
      </div>

      <div className={`menuMbl ${toggleMobileMenu ? 'menuMblOpen' : 'menuMblClose'}`}>
        helo

      </div>

      

    </>
  )
}
