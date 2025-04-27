import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchFoodDetail } from '../../service/FoodService.js';
import { toast } from 'react-toastify'; // Import toast

const FoodDetail = () => {
  const params = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    const loadFoodDetail = async () => {
      try {
        const responseData = await fetchFoodDetail(params.id);
        setData(responseData);
      } catch (error) {
        toast.error("Error displaying food detail"); // Display error toast
      }
    };
    loadFoodDetail();
  }, [params.id]);

  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 my-5">
        <div className="row gx-4 gx-lg-5 align-items-center">
          <div className="col-md-6">
            <img
              className="card-img-top mb-5 mb-md-0"
              src={data.imageUrl}
            />
          </div>
          <div className="col-md-6">
            <div className="fs-5 mb-1">Category: <span className='badge bg-primary'>{data.category}</span> </div>
            <h1 className="display-5 fw-bolder">{data.name}</h1>
            <div className="fs-5 mb-2">
              <span>{data.price}</span>
            </div>
            <p className="lead">
                {data.description}
            </p>
            <div className="d-flex">
              <button
                className="btn btn-outline-dark flex-shrink-0"
                type="button"
              >
                <i className="bi-cart-fill me-1"></i>
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodDetail;