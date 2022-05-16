let router = require("express").Router();

//Controllers
const supplierController = require("../controller/controller");

//home route
router.get("/", (req, res) => {
  res.send("CTSE-Assignment3");
});

//Supplier routes
router.route("/supplier").get(supplierController.getsuppliers);
router.route("/supplier/:id").get(supplierController.getSupplierById);
router.route("/supplier").post(supplierController.addSupplier);
router.route("/supplier/:id").delete(supplierController.deleteSupplier);
router.route("/supplier/:id").put(supplierController.updateSupplier);

module.exports = router;