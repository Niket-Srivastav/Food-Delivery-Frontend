import axios from "axios";

const API_URL = "http://localhost:8080/api/foods";

export const fetchFoodList = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data; 
  } catch (error) {
    console.error("Error in fetchFoodList:", error); // Log any errors
    throw error; // Rethrow the error to handle it in the calling function
  }
};

export const fetchFoodDetail = async (id) => {
    try{
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
    }catch(error){
        console.error("Error in fetchFoodDetail:", error); 
        throw error; 
    }
}