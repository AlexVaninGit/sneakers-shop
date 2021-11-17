import React from "react";
import { Link } from "react-router-dom";

const FavoritesNone = ({onClose}) => {

    return(
        <div className="favorites__none">
            <h2>Закладок нет</h2>
            <p>Вы ничего не добавляли в закладки</p>
            <Link to="/" className="cart-empty__btn" >
                 <img src="images/arrow-prev.svg" alt="arrow-prev" />
                 <span>Вернуться назад</span>
            </Link>

        </div>
    )
}



export default FavoritesNone