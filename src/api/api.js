import data from "./db";
import { cloneDeep } from "lodash";

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

export function sendEditedDesign(updItem) {
  let updatedItem = { ...updItem };
  dataArray = dataArray.map(item => {
    if (item._id == updatedItem._id) {
      return updatedItem;
    } else {
      return item;
    }
  });
  return new Promise(resolve => {
    resolve({ data: updatedItem });
  });
}

export function deleteDesign(id) {
  dataArray = dataArray.filter(design => {
    return design._id !== id;
  });
  return new Promise(resolve => {
    resolve({ data: dataArray });
  });
}

export function addNewDesign(newDesign) {
  newDesign._id = new Date().getTime();
  dataArray.push(cloneDeep(newDesign));
  return new Promise(resolve => {
    resolve({
      data: dataArray
    });
  });
}
