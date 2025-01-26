import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem';
import './FoodDisplay.css'


function FoodDisplay({category}) {
  const {food_list} = useContext(StoreContext);

  // const filteredFood = category === 'All' ? food_list : food_list.filter(item => item.category === category)

  return (
    <div className='food-display' >
        <h2>Top Dishes Near you</h2>
        <div className="food-display-list">
            {food_list.map((item, index) => {
                if(category === 'All' || category === item.category){
                  return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
                }
            })}
        </div>
    </div>
  )
}

export default FoodDisplay