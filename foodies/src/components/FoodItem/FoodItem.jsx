import React, { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import { Link } from 'react-router-dom'

const FoodItem = ({id,
    name,
    description,
    price,
    imageUrl
}) => {
  const { quantities,increaseQuantity, decreaseQuantity } = useContext(StoreContext);

  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex justify-content-center">
      <div
        className="card shadow-lg border-0"
        style={{
          maxWidth: "320px",
          borderRadius: "20px",
          overflow: "hidden",
          transition: "transform 0.3s, box-shadow 0.3s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.05)";
          e.currentTarget.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.2)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.1)";
        }}
      >
        <Link to={`/food/${id}`}>
          <img
            src={imageUrl}
            className="card-img-top"
            alt="Product Image"
            style={{
              height: "200px",
              objectFit: "cover",
              borderTopLeftRadius: "20px",
              borderTopRightRadius: "20px",
            }}
          />
        </Link>
        <div className="card-body">
          <h5
            className="card-title text-truncate"
            style={{ fontWeight: "bold", color: "#333" }}
          >
            {name}
          </h5>
          <p
            className="card-text text-muted"
            style={{ fontSize: "0.9rem", color: "#555" }}
          >
            {description}
          </p>
          <div className="d-flex justify-content-between align-items-center">
            <span
              className="h5 mb-0 text-success"
              style={{ fontWeight: "bold" }}
            >
              {price}
            </span>
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
        <div
          className="card-footer d-flex justify-content-between bg-light"
          style={{
            borderTop: "1px solid #ddd",
            padding: "10px 15px",
            borderBottomLeftRadius: "20px",
            borderBottomRightRadius: "20px",
          }}
        >
          <Link
            to={`/food/${id}`}
            className="btn btn-primary btn-sm"
            style={{
              borderRadius: "20px",
              padding: "7px 15px",
              fontWeight: "bold",
            }}
          >
            View Food
          </Link>
          {quantities[id] > 0 ? (
            <div className="d-flex align-items-center gap-2">
              <button
                className="btn btn-danger btn-sm"
                onClick={() => decreaseQuantity(id)}
                style={{ borderRadius: "50%" }}
              >
                <i className="bi bi-dash-circle"></i>
              </button>
              <span className="fw-bold">{quantities[id]}</span>
              <button
                className="btn btn-success btn-sm"
                onClick={() => increaseQuantity(id)}
                style={{ borderRadius: "50%" }}
              >
                <i className="bi bi-plus-circle"></i>
              </button>
            </div>
          ) : (
            <div>
              <button
                className="btn btn-success btn-sm"
                onClick={() => increaseQuantity(id)}
                style={{ borderRadius: "50%" }}
              >
                <i className="bi bi-plus-circle"></i>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default FoodItem;