import React from 'react';
import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = ({category,searchText}) => {
  const {foodList} = useContext(StoreContext);
  const filteredFoodList = category === 'All' ? foodList : foodList.filter(
  food => food.category === category &&
  food.name.toLowerCase().includes(searchText.toLowerCase()
  ));
  return (
    <div className="container">
      <div className="row">
        {filteredFoodList.length > 0 ? (
          filteredFoodList.map((food, index) => (
              <FoodItem key = {index} 
              id = {food.id}
              name = {food.name}
              description={food.description}
              price={food.price}
              imageUrl={food.imageUrl} />
          ))
        ) : (
          <div className="text-center mt-4">
            <h2>No Food Items Available</h2>
          </div>
        )}
      </div>
    </div>
  )
}

export default FoodDisplay;