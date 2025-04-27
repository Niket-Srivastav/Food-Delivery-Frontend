import { createContext, useEffect, useState } from "react";
import { fetchFoodList } from "../service/FoodService.js";

export const StoreContext = createContext(null);

export const StoreProvider = (props) => {
  const [foodList, setFoodList] = useState([]);

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
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};