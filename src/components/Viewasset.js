import React, { useEffect, useState } from "react";
import { useNavigate,useParams } from "react-router-dom";
import { getAssetById, getListofAssets } from "../Storage/LocalStorage";
import AssetItem from "./AssetItem";

const ViewAsset = () => {
  const [assets, setAssets] = useState();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const asset = getAssetById(id);
      setAssets(asset);
    }
  }, [id]);

  return (
    <div class=" container card bg-light mb-3">
      <button
        type="button"
        className="btn btn-outline-dark"
        onClick={() => navigate("/")}
      >
        Asset List
      </button>
      <div class="text-center card-header">Id No:</div>
      <div className="col-md-6 d-flex align-items-center">
        <div className="ms-4">
          <h5>
            User Name:{" "}
            {assets?.name ? assets.name : "NA"}
          </h5>
          <h5>
            User Email :{" "}
            {assets?.email ? assets.email : "NA"}
          </h5>
          <h5>
            Asset Type:{" "}
            {assets?.type ? assets.type : "NA"}
          </h5>
          <h5>
            Brand Name :{" "}
            {assets?.brand? assets.brand : "NA"}
          </h5>
          <h5>
            Asset Number:{" "}
            {assets?.number ? assets.number : "NA"}
          </h5>
          <h5>
            Purchase Date :{" "}
            {assets?.date? assets.date: "NA"}
          </h5>
        </div>
      </div>

      {/* <div class="card-body">
        <h4 class="card-title"></h4>
        <p class="card-text">
          <h5> User Name:  </h5>
          <h5> User Email: </h5>
          <h5> Asset Type: </h5>
          <h5> Brand Name: </h5>
          <h5> Asset Number: </h5>
          <h5> Purchase Date: </h5>
          
        </p>
      </div> */}
      <div className="d-grid my-2 opacity: 0.33;">
        <button
          className="btn btn-lg btn-primary"
          type="button"
          onClick={() => navigate(`/editasset`)}
        >
          Add New Asset
        </button>
      </div>
    </div>
  );
};

export default ViewAsset;
