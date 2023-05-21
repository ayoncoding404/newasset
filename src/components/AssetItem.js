import React from "react";

const AssetItem = () => {
  return (
    <tr>
      <th>Asset example</th>
      <th>user@gmail.com</th>
      <th>address 123</th>
      <th>12345678</th>
      <th>
        <div className="d-flex gap-3">
          <span role="button" className="badge bg-success" >Edit</span>

          <span role="button" className="badge bg-danger" >Delete</span>
        </div>
      </th>
    </tr>
  );
};

export default AssetItem;
