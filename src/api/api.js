import data from "./db";
var dataArray = [...data];
export function getDataApi() {
  return new Promise(resolve => {
    resolve({ data: [...dataArray] });
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

export function sendEditedData(updItem) {
  dataArray = dataArray.map(item => {
    if (item.id == updItem.id) {
      return updItem;
    } else {
      return item;
    }
  });
  return new Promise(resolve => {
    resolve({ data: updItem });
  });
}
