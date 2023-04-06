// imports
import express from "express";
import {
  createOrder,
  createPayment,
  deleteOrder,
  getAdminOrders,
  getOrder,
  getOrders,
  shippedOrder,
  updateOrder,
} from "../controllers/orderController.js";

// router
const router = express.Router();

// routes
router.get("/", getOrders);
router.get("/admin", getAdminOrders);
router.get("/:id", getOrder);
router.post("/", createOrder);
router.post("/payment", createPayment);
router.patch("/:id", updateOrder);
router.patch("/shipped/:id", shippedOrder);
router.delete("/:id", deleteOrder);

export default router;
