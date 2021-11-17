import React from "react";
import { Link } from "react-router-dom";

const Header = ({onOpenCard, totalPrice}) => {
    return(
    <header className="header">
      <Link to="/">
      <div className='header__logo'>
          <img src="images/logo.png" alt="logo img"/>
          <div className="header__logo-info">
            <h3 className="header__logo-title" >REACT SNEAKERS</h3>
            <p className="header__logo-text">Магазин лучших кроссовок</p>
          </div>

        </div>
      </Link>

        <div className="header__info">
          <div className="header__card" onClick={onOpenCard} >
            <img className="header__card-title" src = "images/card.svg" alt="card img"/>
            <span>{totalPrice()} руб.</span>
          </div>
          <div className="header__favor">
            <Link to="/favorites">
            <img src = "images/header-favor.svg" alt="favor img"/>
            </Link>
          </div>
        </div>
      </header>
    )
}

export default Header