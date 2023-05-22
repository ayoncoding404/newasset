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
    address: "",
    phone: "",
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
      {showAlert && (
        <div className="px-5">
          <div className="alert alert-success" role="alert">
            New Asset Added
          </div>
        </div>
      )}
    </div>
  );
};

export default AssetForm;
