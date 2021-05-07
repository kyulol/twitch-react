import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import twitchLogoWhite from '../../assets/images/logos/twitchWhite.svg';
import search from '../../assets/images/icons/search.svg';
import openMenu from '../../assets/images/icons/menuMbl/openMenu.svg';
// import closeMenu from '../../assets/images/icons/closeMenu.svg';



export default function Navbar() {

  const [searchInput, setSearchInput] = useState('');

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
      <div className="menuMbl block top-8 right-8 w-12 h-12 lg:hidden">
        <img src={openMenu} alt="icone ouvrir ou fermer menu responsive" className="menuIcon"/>
      </div>

    </>
  )
}
