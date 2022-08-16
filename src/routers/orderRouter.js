import { Router } from "express";
import { postOrder,getOrders} from "../controllers/ordersController.js";
import validateSchema from "../middlewares/schemaValidation.js";
import {  orderSchema } from "../schemas/cakeSchema.js";
const orderRouter = Router();

orderRouter.post("/order", validateSchema(orderSchema), postOrder);
orderRouter.get("/orders", getOrders);
orderRouter.get("/orders/:date", getOrders);
// orderRouter.get("/orders/:id", getUser);


export default orderRouter;