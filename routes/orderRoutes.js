const express = require("express");
const orderController = require("../controllers/orderCtrl");

const router = express.Router();
// [GET] /orders
// endpoint will be - https://localhost:5000/api/orders

router.post("/orders", orderController.createOrder);
router.get("/orders/:email", orderController.getOrderByEmail);
router.delete("/orders/:id", orderController.deleteOrder);
router.get("/orders", orderController.getAllOrders);

router.put("/orders/:id", orderController.updateOrder);
module.exports = router;
