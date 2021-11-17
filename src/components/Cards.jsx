import React, { useState } from "react";
import ContentLoader from "react-content-loader";
import { useDispatch } from "react-redux";
import { addItem } from "../actions/items";

const Cards = ({title, price, imgUrl, itemId, mainId, isAdded, onAddToFavorites, loading, isFavorites}) => {

    const [isFavor, setIsFavor] = useState(isFavorites)
    const dispatch = useDispatch()
    return(
      <> 
        {loading
        
          ?<ContentLoader 
          speed={2}
          width={150}
          height={160}
          viewBox="0 0 150 160"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
          >
          <rect x="9" y="13" rx="20" ry="20" width="98" height="62" /> 
          <rect x="17" y="85" rx="0" ry="0" width="82" height="16" /> 
          <rect x="116" y="165" rx="0" ry="0" width="56" height="16" /> 
          <rect x="17" y="116" rx="0" ry="0" width="42" height="11" /> 
          <rect x="75" y="116" rx="0" ry="0" width="20" height="20" />
        </ContentLoader>
        :    <div className="cards__item">
        <div className="cards__item-images">
          <img  src={imgUrl}/>
          <button className={isFavor ? 'cards__item-btn cards__item-btn--liked' : 'cards__item-btn'} onClick={() => {
            setIsFavor(!isFavor)
            onAddToFavorites({title, price, imgUrl, isAdded, isFavorites, id:mainId}, itemId)
          }}>
              {
                  isFavor
                    ? <img  src="images/liked.svg"/>
                    : <img  src={`images/card-icon1.svg`}/>
              }
            
          </button>
        </div>
        <p className="cards__item-text">{title}</p>
        <div className="cards__item-price">
          <div className="price__text">
            <span>Цена:</span>
            <h5 className="price__title">{price} руб.</h5>
          </div>
          <button className={isAdded ? 'price__btn price__btn--favorited' : 'price__btn'} onClick = {() => {
              !isAdded && dispatch(addItem({title, price, imgUrl,isFavorites ,isAdded, id:mainId}, mainId))
          }} >
              <img src="images/card-icon2.svg" alt="add img"/>

          </button>
        </div>
      </div>
        }
       </>


    )
}

export default Cards