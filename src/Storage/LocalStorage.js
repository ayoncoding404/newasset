import uuid from "react-uuid";

export const getListofAssets = () => {
  if (!localStorage["@assets"]) {
    localStorage = JSON.stringify([]);
  }
  let assets = JSON.parse(localStorage["@assets"]);
  return assets;
};

export const getAssetById = (id) => {
  const assets = getListofAssets();
  const asset = assets.find((asset) => asset.id === id);
  return asset;
};
export const addAsset = (asset) => {
  const assets = getListofAssets();
  assets.push({ id: uuid(), ...asset });
  localStorage["@assets"] = JSON.stringify(assets);
  console.log(assets);
};

export const editAsset = (id, newAsset) => {
  let assets = getListofAssets();
  assets = assets.filter((asset) => asset.id !== id);
  assets.push(newAsset);
  localStorage["@assets"] = JSON.stringify(assets);
};

export const deleteAsset = (id) => {
  let assets = getListofAssets();
  assets = assets.filter((asset) => asset.id !== id);
  localStorage["@assets"] = JSON.stringify(assets);
};

export const viewAsset = (id) => {
  let assets = getListofAssets();
  assets=assets.filter((asset) => asset.id ===id )
  localStorage["@assets"] = JSON.stringify(assets);
};
