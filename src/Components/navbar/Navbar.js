import React, { useState } from 'react';
import twitchLogoWhite from '../../assets/images/logos/twitchWhite.svg';
import search from '../../assets/images/icons/search.svg';
import openMenu from '../../assets/images/icons/menuMbl/openMenu.svg';
// import closeMenu from '../../assets/images/icons/closeMenu.svg';



export default function Navbar() {

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
            <img className="logo-twitch w-8" src={twitchLogoWhite} alt="twitch Logo"/>
          </li>

          <li className="nav-li">
            Top Jeux
          </li>

          <li className="nav-li">
            Top Streamers
          </li>
        </ul>

        <div className={`div-search ${outLineInput ? 'ring-2 ring-black rounded-md' : null}`}>
          <form className="form-search">
            <input onClick={changeState} type="text" className="input-search"/>
            <button type="submit" className="btn-submit ">
              <img className="search-icon" src={search} alt="search Icon" srcSet=""/>
            </button>
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
