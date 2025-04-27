import React from 'react';
import { Link } from 'react-router-dom'

const FoodItem = ({id,
    name,
    description,
    price,
    imageUrl
}) => {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex justify-content-center">
    <div className="card shadow-lg border-0" style={{ maxWidth: "320px", borderRadius: "15px", overflow: "hidden" }}>
      <img
        src={imageUrl}
        className="card-img-top"
        alt="Product Image"
        style={{ height: "200px", objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="card-title text-truncate" style={{ fontWeight: "bold" }}>{name}</h5>
        <p className="card-text text-muted" style={{ fontSize: "0.9rem" }}>{description}</p>
        <div className="d-flex justify-content-between align-items-center">
          <span className="h5 mb-0 text-success" style={{ fontWeight: "bold" }}>{price}</span>
          <div>
            <i className="bi bi-star-fill text-warning"></i>
            <i className="bi bi-star-fill text-warning"></i>
            <i className="bi bi-star-fill text-warning"></i>
            <i className="bi bi-star-fill text-warning"></i>
            <i className="bi bi-star-half text-warning"></i>
            <small className="text-muted">(4.5)</small>
          </div>
        </div>
      </div>
      <div className="card-footer d-flex justify-content-between bg-light">
        <Link to={`/food/${id}`} className="btn btn-primary btn-sm" style={{ borderRadius: "20px" }}>View Food</Link>
        <button className="btn btn-outline-secondary btn-sm" style={{ borderRadius: "20px" }}>
          <i className="bi bi-heart"></i>
        </button>
      </div>
    </div>
  </div>
  )
}

export default FoodItem;