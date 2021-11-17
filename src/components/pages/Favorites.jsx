import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFavorites } from "../../store/itemsReducer";
import Cards from "../Cards";
import FavoritesNone from "./FavoritesNone";


const Favorites = ({ onAddToCart, onAddToFavorites, onClose}) => {

    const favorites = useSelector( state => state.items.favorites )
    const dispatch = useDispatch()

    useEffect( () => {
  
      dispatch(getFavorites())

    }, [] )

    return(

        <div  className="content">
        <div className="content__header">
        <h1 className="content__title" >Избранное</h1>
        </div>

        <div className="cards">
          {
            !favorites.length? <FavoritesNone onClose = {onClose}/>
            :favorites.map( item => 
                  <Cards key={item.id} 
                        title={item.title} 
                        price = {item.price} 
                        imgUrl={item.imgUrl} 
                        itemId = {item.id} 
                        mainId = {item.mainId}
                        onAddToCart = {onAddToCart} 
                        isFavorites = {item.isFavorites}
                        isAdded = {item.isAdded}
                        favorited = {true}
                        onAddToFavorites={onAddToFavorites}
                  /> )
          }
          
        </div>
      </div>
    )
}


export default Favorites