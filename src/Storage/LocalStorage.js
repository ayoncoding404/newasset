import uuid from "react-uuid";

export const getListofAssets = () => {
  if (!localStorage["@assets"]) {
    localStorage["@assets"] = JSON.stringify([]);
  }
  let assets = JSON.parse(localStorage["@assets"]);
  return assets;
};

// export const addAsset = (asset) => {
//   const assets = getListofAssets();
//   assets.push({ id: uuid() }, ...asset);
//   localStorage["@assets"] = JSON.stringify(assets);
// };
