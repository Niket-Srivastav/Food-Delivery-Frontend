import { createContext, useEffect, useState } from "react";
import { fetchFoodList } from "../service/FoodService.js";

export const StoreContext = createContext(null);

export const StoreProvider = (props) => {
  const [foodList, setFoodList] = useState([]);
  const [quantities, setQuantities] = useState({});

  const increaseQuantity = (foodId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [foodId]: (prevQuantities[foodId] || 0) + 1,
    }));
  }

  const decreaseQuantity = (foodId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [foodId]: Math.max((prevQuantities[foodId] || 0) - 1, 0),
    }));
  }

  const removeItem = (foodId) => {
    setQuantities((prevQuantities) => {
      const newQuantities = { ...prevQuantities };
      delete newQuantities[foodId];
      return newQuantities;
    });
  }

  useEffect(() => {
    async function loadData() {
      try {
        const data = await fetchFoodList();
        // console.log("Fetched Food List:", data); 
        setFoodList(data);
      } catch (error) {
        console.error("Error fetching food list:", error); 
      }
    }
    loadData();
  }, []);

  const contextValue = {
    foodList,
    quantities,
    increaseQuantity,
    decreaseQuantity,
    removeItem
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};