import axios from "axios";

const API_URL = "http://localhost:8080/api/foods";

export const addFood = async (foodData,image) => {
    /**
     * Creates a new instance of FormData to handle form submissions.
     * FormData is used to construct a set of key/value pairs representing form fields and their values,
     * which can be sent using HTTP requests, such as POST or PUT.
     */
    const formData = new FormData();
    formData.append("food", JSON.stringify(foodData)); // Append the food data as a JSON string
    formData.append("file", image); // Append the image file

    try{
        await axios.post(API_URL, formData, {
          headers: {
            'Content-Type': 'multipart/form-data', // Set the content type to multipart/form-data
          },
        });
      }
      catch (error) {
        console.error("Error adding food:", error); 
        throw error; // Rethrow the error to handle it in the calling function 
    }
}