import React, { useContext } from 'react'
import './FoodItems.css'
import { assets } from '../assets/assets'
import { StoreContext } from '../context/StoreContext';

const FoodItems = ({ id , name , image , price , description , category }) => {
    const {cardItems,addToCart, removeToCart} = useContext(StoreContext);
  return (
    <div className='food-item'>
      <div className="food-item-img-con">
        <img className='food-item-img' src={image} alt=""/>
        
        { !cardItems[id]
            ? <img className='add' src={assets.add_icon_white} onClick={()=>{addToCart(id)}}/> 
            : <div className='food-item-counter'>
                <img onClick={()=>{removeToCart(id)}} src={assets.remove_icon_red} alt="" />
                <p>{cardItems[id]}</p>
                <img onClick={()=>{addToCart(id)}} src={assets.add_icon_green} alt="" />
              </div>}
      </div>

      <div className="food-item-info">
        <div className="food-item-name-rating">
            <p>{name}</p>
            <img src={assets.rating_starts} alt="" />
        </div>
        <p className='food-item-description'>{description}</p>
        <p className='food-item-price'>${price}</p>
      </div>
    </div>
  )
}

export default FoodItems;