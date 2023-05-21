import React, { useEffect, useState } from "react";
import AssetItem from "./AssetItem";
import { getListofAssets } from "../Storage/LocalStorage";

const Assetlist = () => {
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    setAssets(getListofAssets());
  }, []);
  return (
    <div>
      <div className="container">
        <h1 className="my-5 text-center">Manage Asset</h1>
        {assets.length > 0 ? (
          <div className="card bg-secondary p-3">
            <table className="table table-sm table-hover">
              <thead className="thead-dark">
                <tr>
                  <th>Asset Name</th>
                  <th>Asset Number</th>
                  <th>Asset Type</th>
                  <th>User</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                <AssetItem />
              </tbody>
            </table>
          </div>
        ) : (
          <h3 className="text-center"> No Asset </h3>
        )}
      </div>
    </div>
  );
};

export default Assetlist;
