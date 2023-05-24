import {v4 as uuid} from "uuid";

export const getListofAssets = () => {
    let assets = []
    if (localStorage.getItem("@assets")) {
        assets = JSON.parse(localStorage.getItem("@assets"));
    } 
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
  localStorage.setItem("@assets", JSON.stringify(assets));
  // console.log(assets);
};

export const editAsset = (id, newAsset) => {
  let assets = getListofAssets();
  const index = assets.findIndex((asset) => asset.id === id);
  if(index > -1) {
    assets[index] = {...newAsset}
    localStorage.setItem("@assets", JSON.stringify(assets));
  }
};

// export const editAsset = (id, newAsset) => {
//   let assets = getListofAssets();
//   assets = assets.filter((asset) => asset.id !== id);
//   assets.push(newAsset);
//   localStorage["@assets"] = JSON.stringify(assets);
// };

export const deleteAsset = (id) => {
  let assets = getListofAssets();
  assets = assets.filter((asset) => asset.id !== id);
  localStorage.setItem("@assets", JSON.stringify(assets));
};
