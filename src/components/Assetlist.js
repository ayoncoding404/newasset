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
                  <th>User Name</th>
                  <th>User Email</th>
                  <th>Asset Brand</th>
                  <th>Asset Number</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {assets.map((asset) => (
                  <AssetItem asset={asset} key={asset.id} setAssets={setAssets} />
                ))}
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
