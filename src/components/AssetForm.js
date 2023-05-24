import UseForm from "../Hooks/UseForm";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { addAsset, getAssetById, editAsset } from "../Storage/LocalStorage";

const AssetForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [showAlert, setShowAlert] = useState(false);
  const { inputValues, handleInputChange, resetForm, setForm } = UseForm({
    name: "",
    email: "",
    brand: "",
    number: "",
    type: "",
    date: "",
  });

  useEffect(() => {
    if (id) {
      const asset = getAssetById(id);
      setForm(asset);
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    id ? editAsset(id, inputValues) : addAsset(inputValues);
    console.log(inputValues);
    resetForm();
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };
  return (
    <div className="container">
      {/* header */}
      <div className="d-flex my-5 justify-content-between">
        <button
          type="button"
          className="btn btn-outline-dark"
          onClick={() => navigate("/")}
        >
          Back
        </button>
        <h1 className="container text-center">
          {" "}
          {id ? "Edit" : "Create"} Asset
        </h1>
      </div>
      {/* Form */}
      <div className="card border-primary p-5 m-5">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label mt-2" htmlFor="name">
              User Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={inputValues.name}
              onChange={handleInputChange}
              className="form-control"
              placeholder="Asset User"
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
              placeholder="User Email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="type" className="form-label mt-2">
              Asset Type
            </label>
            <select
              className="form-select"
              id="type"
              name="type"
              value={inputValues.type}
              onChange={handleInputChange}
            >
              <option>Desktop</option>
              <option>Laptop</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label mt-2" htmlFor="brand">
              Brand Name
            </label>
            <input
              id="brand"
              type="text"
              name="brand"
              value={inputValues.brand}
              onChange={handleInputChange}
              className="form-control"
              placeholder="Asset brand"
            />
          </div>

          <div className="form-group">
            <label className="form-label mt-2" htmlFor="number">
              Asset Number
            </label>
            <input
              id="number"
              type="text"
              name="number"
              value={inputValues.number}
              onChange={handleInputChange}
              className="form-control"
              placeholder="Enter Asset Number"
            />
          </div>

          <div className="form-group">
            <label htmlFor="date" className="form-label mt-3">
              Purchase Date:
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={inputValues.date}
              onChange={handleInputChange}
              className="form-control"
            ></input>
          </div>
          <div className="d-grid gap-2 mt-4">
            <button type="submit" className="btn btn-outline-primary">
              {id ? "Update" : "Create"} Asset
            </button>
          </div>
        </form>
      </div>
      {showAlert && (
        <div className="px-5">
          <div className="alert alert-success" role="alert">
            New Asset {id ? "Updated" : "Created"} 
          </div>
        </div>
      )}
    </div>
  );
};

export default AssetForm;
