import React from "react";
import AddBar from "./components/AddBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Assetlist from "./components/Assetlist";
import AssetForm from "./components/AssetForm";
import ViewAsset from "./components/ViewAsset"

const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <AddBar />
      </div>

      <Routes>
        <Route path="/" element={<Assetlist />} />
        <Route path="/createasset" element={<AssetForm />} />
        <Route path="/editasset/:id" element={<AssetForm />} />
        <Route path="/viewasset/:id" element= {<ViewAsset /> } />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
