const Supplier = require("../model/model");

//add Supplier
const addSupplier = async (req, res) => {
  try {
    let newSupplier = new Supplier(req.body);
    await newSupplier.save();
    res.status(200).send(newSupplier);
  } catch (error) {
    res.status(500).send(error);
  }
};

//get all suppliers
const getsuppliers = async (req, res) => {
  try {
    let suppliers = await Supplier.find();
    res.status(200).send(suppliers);
  } catch (error) {
    res.status(500).send(error);
  }
};

//get  Supplier by id
const getSupplierById = async (req, res) => {
  try {
    let supplier = await Supplier.findById(req.params.id);
    res.status(200).send(supplier);
  } catch (error) {
    res.status(500).send(error);
  }
};

//delete  supplier
const deleteSupplier = async (req, res) => {
  try {
    await Supplier.findByIdAndDelete(req.params.id);
    res.status(200).send("Supplier Deleted");
  } catch (error) {
    res.status(500).send(error);
  }
};

//update supplier
const updateSupplier = async (req, res) => {
  try {
    let supplier = await Supplier.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).send(supplier);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
    addSupplier,
    getsuppliers,
    getSupplierById,
    deleteSupplier,
    updateSupplier,
};