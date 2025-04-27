import React, {useContext} from 'react'
import { StoreContext } from '../../context/StoreContext';
import { calculateCartTotal } from '../../util/CartUtils';

const PlaceOrder = () => {
    const {foodList, quantities, setQuantities} = useContext(StoreContext);
    const cartItems = foodList.filter((food) => quantities[food.id] > 0);

    const {subTotal, shipping, tax, total } =calculateCartTotal(cartItems, quantities);
  return (
<div className="container mt-5">
      <div className="row">
        <div className="col-md-4 order-md-2">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-muted">Your cart</span>
            <span className="badge badge-secondary badge-pill">3</span>
          </h4>
          <ul className="list-group mb-3">
            {
                cartItems.map((item) => (
                    <li className="list-group-item d-flex justify-content-between lh-condensed">
                    <div>
                      <h6 className="my-0">{item.name}</h6>
                      <small className="text-muted">Qty : {quantities[item.id]}</small>
                    </div>
                    <span className="text-muted">₹{item.price * quantities[item.id]}</span>
                  </li>
                ))
            }

            <li className="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                <h6 className="my-0">Shipping</h6>
              </div>
              <span className="text-muted">₹{shipping}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                <h6 className="my-0">Tax</h6>
              </div>
              <span className="text-muted">₹{tax}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <span>Total (INR)</span>
              <strong>₹{total}</strong>
            </li>
          </ul>
        </div>
        <div className="col-md-8 order-md-1">
          <h4 className="mb-3">Billing address</h4>
          <form className="needs-validation" novalidate>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="firstName">First name</label>
                <input type="text" className="form-control" id="firstName" placeholder="Niket" required/>
                <div className="invalid-feedback">
                  Valid first name is required.
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="lastName">Last name</label>
                <input type="text" className="form-control" id="lastName" placeholder="Srivastav" required/>
                <div className="invalid-feedback">
                  Valid last name is required.
                </div>
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="Email">Email</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">@</span>
                </div>
                <input type="email" className="form-control" id="Email" placeholder="Example@gmail.com" required/>
                <div className="invalid-feedback" style={{width: "100%;"}}>
                  Your Email is required.
                </div>
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="phone">Phone no.</label>
              <input type="text" inputmode="numeric" className="form-control" id="phone" placeholder="7940923921" required/>
              <div className="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="address">Address</label>
              <input type="text" className="form-control" id="address" placeholder="1234 Main St" required/>
              <div className="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>

            <div className="row">
              <div className="col-md-5 mb-3">
                <label htmlFor="country">Country</label>
                <select className="custom-select d-block w-100" id="country" required>
                  <option value="">Choose...</option>
                  <option>India</option>
                </select>
                <div className="invalid-feedback">
                  Please select a valid country.
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="state">State</label>
                <select className="custom-select d-block w-100" id="state" required>
                  <option value="">Choose...</option>
                  <option>Uttar Pradesh</option>
                </select>
                <div className="invalid-feedback">
                  Please provide a valid state.
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <label htmlFor="zip">Zip</label>
                <input type="text" className="form-control" id="zip" placeholder="230001" required/>
                <div className="invalid-feedback">
                  Zip code required.
                </div>
              </div>
            </div>
            <hr className="mb-4"/>
            <button className="btn btn-primary btn-lg btn-block" disabled = {cartItems.length === 0} type="submit">Continue to checkout</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder;