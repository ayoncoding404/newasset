import React from "react";
import { useNavigate, Link } from "react-router-dom";

const AddBar = () => {
  const navigate = useNavigate();

  return (

    <div class="d-grid gap-5 margin:.25rem opacity: 0.33;" >
      <button
        class="btn btn-lg btn-primary"
        type="button"
        onClick={() => navigate("/createasset")}
      >
        Add New Asset
      </button>
    </div>
  );
};

export default AddBar;
