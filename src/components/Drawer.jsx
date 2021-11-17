
import React, {useState } from "react";
import { useDispatch } from "react-redux";
import { removeItemToCart } from "../actions/items";

const Drawer = ({onClose, items, totalPrice}) => {

    const [ isOrdered, setIsOrdered ] = useState(false)

    const cartItems = items.filter( item => item.isAdded )

    const dispatch = useDispatch()

    return (
        <div className="drawer">
        <div className="drawer__header">
        <h2 className="drawer__title">Корзина</h2>
        <button className="drawer__cards__item-btn" onClick={onClose} >
              <img src="images/cards-remove.svg" alt="img"/>
            </button>
        </div>


            { cartItems.length ? 
            <>
        <div  className="drawer__cards">
            {
            cartItems.map( item => 
                <>
                  <div className="drawer__cards__item">
                    <img className="sneakers__img" src={item.imgUrl}/>
                    <div className="drawer__cards__item-description">
                       <p className="drawer__cards__item-description__text">{item.title}</p>
                        <b className="drawer__cards__item-description__price">{item.price} руб.</b>
                      </div>
                    <button className="drawer__cards__item-btn" onClick = { () => dispatch(removeItemToCart(item, item.id)) }>
                      <img src="images/cards-remove.svg" alt="img"/>
                    </button>
                </div>

                </>
                
              )}
              </div>
                      <div className="drawer__cartTotalCount" >
                  <div className="drawer__cartTotalCount-item">
                    <span>Итого: </span>
                    <div></div>
                    <b>{totalPrice()} руб. </b>
                  </div>
                </div>
                <button className="drawer__cartTotalCount-btn"
                  onClick={ () =>{
                    setIsOrdered(true)
                    console.log(cartItems);
                    cartItems.forEach( (item) =>  dispatch(removeItemToCart(item, item.id)))
                  }
                  }
                  ><span>Оформить заказ</span> <img src="images/arrow.svg" /></button>
              </>:
             <div className="cart-empty">
               <img className="cart-empty__img" src={isOrdered ? 'images/order.png' : "images/cart-empty.png"} alt="cart-empty"/>
               <h2 className="cart-empty__title">{isOrdered ? "Заказ оформлен" : "Корзина пустая"}</h2>
               <p className="cart-empty__text">{isOrdered ? "" : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."}</p>
               <button className="cart-empty__btn" onClick={onClose}>
                 <img src="images/arrow-prev.svg" alt="arrow-prev" alt="img" />
                 <span>Вернуться назад</span>
               </button>
               
            </div>}
        



      </div>
    )
}

export default Drawer