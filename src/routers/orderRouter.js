import { Router } from "express";
import { postOrder } from "../controllers/ordersController.js";
import validateSchema from "../middlewares/schemaValidation.js";
import {  orderSchema } from "../schemas/cakeSchema.js";
const orderRouter = Router();

orderRouter.post("/order", validateSchema(orderSchema), postOrder);
// orderRouter.get("/orders", deleteURLById);
// orderRouter.get("/orders/:id", getUser);


export default orderRouter;