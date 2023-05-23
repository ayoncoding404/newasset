import React from "react";
import { useNavigate, Link } from "react-router-dom";

const AddBar = () => {
  const navigate = useNavigate();

  return (

    <div className="d-grid gap-5 my-5 opacity: 0.33;" >
      <button
        className="btn btn-lg btn-primary"
        type="button"
        onClick={() => navigate("/createasset")}
      >
        Add New Asset
      </button>
    </div>
  );
};

export default AddBar;
