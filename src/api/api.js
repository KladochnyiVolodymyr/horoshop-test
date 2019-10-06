import data from "./db";
var dataArray = [...data];
export function getDataApi() {
  return new Promise(resolve => {
    resolve({ data: [...dataArray] });
  });
}

export function getDesignById(id) {
  const currentItem = dataArray.filter(item => {
    return item.id == id;
  })[0];
  return new Promise(resolve => {
    resolve({ data: currentItem });
  });
}

export function sendEditedData(updItem) {
  let updatedItem = { ...updItem };
  dataArray = dataArray.map(item => {
    if (item.id == updatedItem.id) {
      return updatedItem;
    } else {
      return item;
    }
  });
  return new Promise(resolve => {
    resolve({ data: updatedItem });
  });
}
