const service = require("../services/services.js");

const create = async (req, res) => {
  try {
    const { id, name, email, password } = req.body;
    const items = {
      id,
      name,
      email,
      password,
    };

    const result = await service.addItem(items);
    if (result === false) return res.status(400).send(`Not Created...`);
    return res.status(200).json({
      success: true,
      message: `User Created Successfully...`,
    });
  } catch (error) {
    return res.status(500).send(`Not Created...`);
  }
};

const getAll = async (req, res) => {
  try {
    const result = service.getAllItems();
    if (!result) return res.status(400).send(`Not finded...`);
    return res.status(200).json({
      success: true,
      message: `All Users finded Successfully...`,
      result: result,
    });
  } catch (error) {
    return res.status(500).send(`Not finded...`);
  }
};

const update = async (req, res) => {
  try {
    const { id, name, email, password } = req.body;
    const items = {};
    name && items.name === name;
    email && items.email === email;
    password && items.password === password;

    const result = await service.updateItem(id, items);
    if (!result) return res.status(400).send(`Not Updated...`);
    return res.status(200).json({
      success: true,
      message: `User Updated Successfully...`,
      result: result,
    });
  } catch (error) {
    return res.status(500).send(`Not Updated...`);
  }
};

const del = async (req, res) => {
  try {
    const { id } = req.body;
    const result = await service.deleteItem(id);
    if (result === false) return res.status(400).send(`Not Deleted...`);
    return res.status(200).json({
      success: true,
      message: `User Deleted Successfully...`,
      result: result,
    });
  } catch (error) {
    return res.status(500).send(`Not Deleted...`);
  }
};

module.exports = {
  create,
  getAll,
  update,
  del,
};
