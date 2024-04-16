import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../assets/assets'

const ExploreMenu = ({category , setCategory}) => {
  return (
    <div className='explore-menu' id='exploe-menu'>
      <h1>Explore Menu</h1>
      <p className='explore-menu-text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam eaque nihil repudiandae blanditiis in sed eveniet ab a expedita animi perferendis dicta similique, molestias repellendus praesentium, est, accusamus exercitationem iusto.</p>
        <div className="explore-menu-list">
            {menu_list.map((item , index)=>{
              // ((pre) => pre === Name) check the previous state first.
                return <div className="explore-menu-list-items" key={index} onClick={() => { 
                    setCategory(prev=>prev === item.menu_name ? "All" : item.menu_name );
                    console.log(item.menu_name , category);
                    }}>
                  <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt="" />
                  <p>{item.menu_name}</p>
                </div>
            })}
        </div>
        <hr />
    </div>
  )
}

export default ExploreMenu;