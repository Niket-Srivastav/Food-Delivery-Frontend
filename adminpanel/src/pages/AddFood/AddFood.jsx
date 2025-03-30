import React, { useState } from 'react';
import { assets } from '../../assets/assets.js';
import { addFood } from '../../sevices/foodService.js';
import { toast } from 'react-toastify';

const AddFood = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const [data, setData] = useState({
    name: "",
    category: "",
    price: "",
    description: "",
  });
  const [file,setFile] = useState(null);

  const handleImageChange = (e) => {
    setFile(e.target.files[0]);
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result); // Set the image preview URL
      };
      reader.readAsDataURL(file); // Read the file as a data URL
    }
  };

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((prev) => ({ ...prev, [name]: value }));
  }

  const onSubmitHandler = async (event) => { 
    event.preventDefault();
    if(!imagePreview) {
      toast.error("Please upload an image");
      return;
    }
    try{
      await addFood(data,file);
      toast.success("Food added successfully");
      setData({
        name: "",
        category: "Biryani",
        price: "",
        description: "",
      });
      setFile(null);
      setImagePreview(null);
    }
    catch{
      toast.error("Error adding food");
    }
  }


  return (
    <div className="container mt-5">
      <div className="row ">
        <div className="card col-md-8">
          <div className="card-body">
            <h2 className="mb-4">Add Food</h2>
            <form onSubmit={onSubmitHandler}>
              <div className="mb-3">
                <label htmlFor="image" className="form-label">
                  {/* Show the uploaded image preview or the default upload icon */}
                  {imagePreview ? (
                    <img src={imagePreview} alt="Preview" width={98} />
                  ) : (
                    <img src={assets.upload} alt="Upload" width={98} />
                  )}
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="image"
                  hidden
                  onChange={handleImageChange} 
                />
              </div>

              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  required
                  name="name"
                  placeholder="Enter food name" // Added placeholder
                  onChange={onChangeHandler}
                  value={data.name}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="category" className="form-label">Category</label>
                <select
                  name="category"
                  id="category"
                  className="form-control"
                  onChange={onChangeHandler}
                  value={data.category}
                >
                  <option value="Biryani">Biryani</option>
                  <option value="Cake">Cake</option>
                  <option value="Burger">Burger</option>
                  <option value="Pizza">Pizza</option>
                  <option value="Salad">Salad</option>
                  <option value="Icecream">Icecream</option>
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="price" className="form-label">Price</label>
                <input
                  type="number"
                  id="price"
                  required
                  name="price"
                  className="form-control"
                  placeholder="Enter food price" // Added placeholder
                  onChange={onChangeHandler}
                  value={data.price}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <textarea
                  className="form-control"
                  id="description"
                  rows="5"
                  required
                  name="description"
                  placeholder="Enter food description" // Added placeholder
                  onChange={onChangeHandler}
                  value={data.description}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary">
                <i className="bi bi-plus-square"></i> Add
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddFood;