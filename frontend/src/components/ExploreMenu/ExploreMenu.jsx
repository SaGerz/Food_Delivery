import React, { useState } from 'react'
import './ExploreMenu.css'
import {menu_list} from '../../assets/assets'

function ExploreMenu({category, setCategory}) {
    return (
        <div className='explore-menu' id='explore-menu'>
            <h1>Explore Menu</h1>
            <p className='explore-menu-text' >Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and evelate your dinning experience, one delicious meal at time</p>
            <div className="explore-menu-item">
                {menu_list.map((item, index) => {
                    return (
                        <div onClick={() => setCategory(prev => prev===item.menu_name?"All":item.menu_name)} className="explore-menu-item-list" key={index}>
                            <img className={category===item.menu_name?"active":""} src={item.menu_image} />
                            <p>{item.menu_name}</p>
                        </div>
                    )
                })}
            </div>
            <hr />
        </div>
    )
}

export default ExploreMenu