const fs = require("fs");
const path = require("path");

const dbPath = path.join("./localDB/", "data.json");

const readData = () => {
  try {
    const data = fs.readFileSync(dbPath, "utf8");
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
};

const writeData = (data) => {
  const dataString = JSON.stringify(data, null, 2);
  fs.writeFileSync(dbPath, dataString, "utf8");
};

// ------------------> apisssssss <------------------
const addItem = (item) => {
  const data = readData();
  data.push(item);
  if (writeData(data)) return true;
  return false;
};

const updateItem = (id, updatedItem) => {
  const data = readData();
  console.log(data);
  const index = data.findIndex((item) => item.id === id);
  console.log(index);
  if (index !== -1) {
    data[index] = updatedItem;
    var result = writeData(data);
  }
  return result;
};

const getAllItems = () => {
  return readData();
};

const getItemById = (id) => {
  const data = readData();
  return data.find((item) => item.id === id);
};

const deleteItem = (id) => {
  const data = readData();
  const filteredData = data.filter((item) => item.id !== id);
  if (writeData(filteredData)) return true;
  return false;
};

module.exports = {
  addItem,
  updateItem,
  getAllItems,
  getItemById,
  deleteItem,
};
