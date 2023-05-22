import React from "react";
import { useNavigate } from "react-router-dom";

const AssetItem = ({ asset }) => {
  const { id, name, email, address, phone } = asset;
  const navigate = useNavigate();
  return (
    <tr>
      <th>{name}</th>
      <th>{email}</th>
      <th>{address}</th>
      <th>{phone}</th>
      <th>
        <div className="d-flex gap-3">
          <span
            role="button"
            className="badge bg-success"
            onClick={() => navigate(`/edit-asset/${id}`)}
          >
            Edit
          </span>

          <span role="button" className="badge bg-danger">
            Delete
          </span>
        </div>
      </th>
    </tr>
  );
};

export default AssetItem;
