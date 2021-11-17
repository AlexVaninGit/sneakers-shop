import React from "react";
import { useSelector } from "react-redux";
import Cards from "../Cards";


const Home = ({searchValue, onCheangSearchInput, onAddToFavorites, loading }) => {

    
    const items = useSelector( state => state.items.items ) 



    return (

        <div  className="content">
        <div className="content__header">
        <h1 className="content__title" >Все кроссовки</h1>
        <div className="content__search-block">
          <img src="./images/search.svg" alt="serch" />
          <input type="text" placeholder="Поиск..." value={searchValue} onChange={onCheangSearchInput} />
        </div>
        </div>
        <div className="cards">
          {
            items.filter( i => i.title.toLowerCase().includes(searchValue.toLowerCase()) )
                  .map( item => 
                  <Cards key={item.id} 
                        mainId = {item.mainId}
                        title={item.title} 
                        price = {item.price} 
                        imgUrl={item.imgUrl} 
                        itemId = {item.id}
                        isAdded = {item.isAdded}
                        isFavorites = {item.isFavorites}
                        onAddToFavorites={onAddToFavorites}
                        loading = {loading}
                  /> )
          }
          
        </div>
      </div>
    )
}

export default Home