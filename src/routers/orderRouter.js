import { Router } from "express";
import { postOrder,getOrders,getOrderById} from "../controllers/ordersController.js";
import validateSchema from "../middlewares/schemaValidation.js";
import {  orderSchema } from "../schemas/cakeSchema.js";
const orderRouter = Router();

orderRouter.post("/order", validateSchema(orderSchema), postOrder);
orderRouter.get("/orders", getOrders);
orderRouter.get("/orders/:id", getOrderById);

export default orderRouter;