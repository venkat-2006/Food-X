import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = () => {
  return (
    <div className='explore-menu' id="explore-menu">
      <h1>Explore Menu</h1>  

      <p className='explore-menu-text'>
        Choose from a diverse menu featuring handcrafted dishes, seasonal ingredients, bold flavors, and something delicious for everyone 
      </p>

      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return ( 
            <div className="explore-menu-list-item" key={index}>
              <img src={item.menu_image} alt={item.menu_name} />
              <h3>{item.menu_name}</h3>
            </div>
          )
        })}
      </div> 
    </div>
  )
}

export default ExploreMenu
