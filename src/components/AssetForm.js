import UseForm from "../Hooks/UseForm";
import React from "react";
import { useNavigate } from "react-router-dom";
// import { addAsset } from "../Storage/LocalStorage";

const AssetForm = () => {
  const navigate = useNavigate();
  const { inputValues, handleInputChange, resetForm } = UseForm({
    name: "",
    email: "",
    address: "",
    phone: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // addAsset(inputValues)
    console.log(inputValues);
    resetForm()
  };
  return (
    <div>
      {/* header */}
      <div className="d-flex my-5 justify-content-between">
        <button
          type="button"
          className="btn btn-outline-dark"
          onClick={() => navigate("/")}
        >
          Back
        </button>
        <h1 className="container text-center">Add Asset</h1>
      </div>
      {/* Form */}
      <div className="card border-primary p-5 m-5">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label mt-2" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={inputValues.name}
              onChange={handleInputChange}
              className="form-control"
              placeholder="Enter Name"
            />
          </div>

          <div className="form-group">
            <label className="form-label mt-2" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={inputValues.email}
              onChange={handleInputChange}
              className="form-control"
              placeholder="Enter Email"
            />
          </div>

          <div className="form-group">
            <label className="form-label mt-2" htmlFor="address">
              Address
            </label>
            <input
              id="address"
              type="text"
              name="address"
              value={inputValues.address}
              onChange={handleInputChange}
              className="form-control"
              placeholder="Enter Address"
            />
          </div>

          <div className="form-group">
            <label className="form-label mt-2" htmlFor="phone">
              Phone
            </label>
            <input
              id="phone"
              type="text"
              name="phone"
              value={inputValues.phone}
              onChange={handleInputChange}
              className="form-control"
              placeholder="Enter Phone"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-outline-primary">
              Add Asset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AssetForm;
