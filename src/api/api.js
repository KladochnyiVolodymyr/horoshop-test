import data from "./db";

export function getDataApi() {
  return new Promise(resolve => {
    resolve({ data: [...data] });
  });
}

export function getDesignById(id) {
  const currentItem = data.filter(item => {
    return item.id == id;
  })[0];
  return new Promise(resolve => {
    resolve({ data: currentItem });
  });
}
