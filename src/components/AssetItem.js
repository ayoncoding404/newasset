import React from "react";
import { useNavigate } from "react-router-dom";
import { deleteAsset, getListofAssets } from "../Storage/LocalStorage";

const AssetItem = ({ asset, setAssets }) => {
  const { id, name, email, brand, number, type, date } = asset;
  const navigate = useNavigate();

  const removeAsset = () => {
    deleteAsset(id);
    setAssets(getListofAssets);
  };

  return (
    <tr>
      <th>{name}</th>
      <th>{email}</th>
      <th>{brand}</th>
      <th>{number}</th>
      <th>
        <div className=" d-flex gap-3">
          <span
            role="button"
            className="badge bg-success"
            onClick={() => navigate(`/editasset/${id}`)}
          >
            Edit
          </span>

          <span
            role="button"
            className="badge bg-danger"
            onClick={() => removeAsset()}
          >
            Delete
          </span>
          <span
            role="button"
            className="badge bg-warning"
            onClick={() => navigate(`/viewasset/${id}`)}
          >
            View
          </span>

        </div>
      </th>
    </tr>
  );
};

export default AssetItem;
