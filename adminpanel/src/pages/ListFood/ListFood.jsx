import React, {useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { getFoodList,deleteFood } from '../../sevices/foodService.js';

const ListFood = () => {
  
  const [list,setList]  = useState([])

  const fetchList = async () => {
    try{
      const data = await getFoodList();
      setList(data);
    }catch (error) {
      console.error("Error fetching food list:", error); 
      toast.error("Error fetching food list");
    }
  }

  const removeFood = async (foodId) => {
    try{
      const isDeleted = await deleteFood(foodId);
      if(isDeleted){
        toast.success("Food deleted successfully");
        await fetchList(); // Refresh the list after deletion
      }else{
        toast.error("Error deleting food");
      }
    }catch (error) {
      console.error("Error deleting food:", error); 
      toast.error("Error deleting food");
    }
  } 

  useEffect(() => {
    fetchList();
  },[]);

  return (
    <div className="py-5 row justify-content-center">
      <div className='col-11 card'>
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody style={{ borderTop: '2px solid #dee2e6', marginTop: '10px' }}>
            {
              list.map((item,index) =>{
                return (
                  <tr key={index} style={{ borderBottom: '1px solid #dee2e6', marginBottom: '10px' }}>
                  <td>
                    <img 
                    src={item.imageUrl} 
                    alt={item.name} 
                    style={{ width: '50px', height: '50px', objectFit: 'cover' }} 
                    className='mt-2 '
                    />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.category}</td>
                  <td>{item.price}</td>
                  <td className='text-danger'>
                    <i className='bi bi-x-circle-fill' onClick={()=>removeFood(item.id)}></i>
                  </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ListFood;