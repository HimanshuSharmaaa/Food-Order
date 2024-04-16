import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import './Cart.css'

const Cart = () => {
  const { cardItems , food_list , removeToCart } = useContext(StoreContext);
  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item,index)=>{
          if(cardItems[item._id] > 0){
            return (
              <>
              <div className='cart-items-title cart-items-item'>
                <img src={item.image} alt="" />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{cardItems[item._id]}</p>
                <p>${item.price * cardItems[item._id]}</p>
                <p className='cross' onClick={()=>{removeToCart(item._id)}}>X</p>
              </div>
              <hr />
              </>
            )
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className='cart-total'>
          <h2>Card Total</h2>
          <div>
            <div className="card-total-details">
              <p>SubTotal</p>
              <p>{0}</p>
            </div>
            <hr />
            <div className="card-total-details">
              <p>Delivery Charges</p>
              <p>{2}</p>
            </div>
            <hr />
            <div className="card-total-details">
              <b>Total</b>
              <b>{0}</b>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>IF YOU ARE HAVE A PROMOCODE , ENTER HERE</p>
            <div className='cart-promocode-input'>
              <input type="text" placeholder='Enter Promo-Code Here..'/>
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart;