// imports
import express from "express";
import {
  createProduct,
  deleteProducts,
  getProducts,
  updateProduct,
} from "../controllers/productControllers.js";

// router
const router = express.Router();

router.get("/", getProducts);
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProducts);

export default router;
