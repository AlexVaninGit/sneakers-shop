import React, { useEffect, useState } from 'react';
import Drawer from './components/Drawer';
import Header from './components/Header';
import axios from 'axios';
import './styles/style.scss'
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Favorites from './components/pages/Favorites';
import { useDispatch, useSelector } from 'react-redux';
import { getItems } from './actions/items';

export const AppContext = React.createContext({})


function App() {
  // const [items, setItems] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [isOpenCard, setIsOpenCard] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isFav, setIsFav] = useState(false)

  const dispatch = useDispatch()
  const items = useSelector( state => state.items.items ) 
  const isAdded = useSelector( state => state.items.isAdded )

 


  const onAddToFavorites = async (obj, id) => {
    if(obj.isFavorites){
      await axios.put(`https://61884cf4057b9b00177f9c2b.mockapi.io/items/${id}`, {...obj, isFavorites: false})
      setIsFav(!isFav)
    }else{
      await axios.put(`https://61884cf4057b9b00177f9c2b.mockapi.io/items/${id}`, {...obj, isFavorites: true})
      setIsFav(!isFav)
    }
  }

  useEffect( () => {
    dispatch(getItems())
    setIsLoading(false)
    console.log('agdadgadg');
  }, [isFav, isAdded] )




    const onCheangSearchInput = e =>{
      setSearchValue(e.target.value)
    }

    const orderTotalPrice  = () => {
      let total = 0
      items.filter( i => i.isAdded ).forEach( i => total += i.price )
      return total
    }
  return (
    <div className="wrapper">

      { isOpenCard && <div className="overlay">
        <Drawer items={items} totalPrice = {orderTotalPrice} onClose = { () => setIsOpenCard(false) }/>
      </div>}



        <Header onOpenCard = { () => setIsOpenCard(true) } totalPrice = {orderTotalPrice} />
        <div className="offer">
          <div className="offer__info">
            <h2><span>Stan Smith,</span> Forever!</h2>
            <button>Купить</button>
          </div>
          <img src="images/offer-img.jpg" alt="offer img"/>
        </div>
        <Routes>  
          <Route path="/favorites" element={<Favorites onAddToFavorites={onAddToFavorites}/>}  />
          <Route path="/" element={<Home onCheangSearchInput = {onCheangSearchInput} 
                searchValue = {searchValue} onAddToFavorites={onAddToFavorites}
                loading = {isLoading}
                />} 
                />
        </Routes>
    </div>
  );
}

export default App;
