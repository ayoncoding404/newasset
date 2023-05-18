import React from "react";

const Assetlist = () => {
  return (
    <div>
      <h1 className="my-5 text-center">Manage Asset</h1>
      <div className="card bg-secondary p-3">
        <table className=" table table-hover">
          <thead>
            <tr>
              <th>Name</th>
              <th>Asset Type</th>
              <th>User</th>
              <th>Action</th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
};

export default Assetlist;
