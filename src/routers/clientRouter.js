import { Router } from "express";
import { postClient,getClientOrders } from "../controllers/clientsController.js";
import validateSchema from "../middlewares/schemaValidation.js";
import { clientSchema } from "../schemas/cakeSchema.js";
const clientRouter = Router();

clientRouter.post("/clients", validateSchema(clientSchema), postClient);
clientRouter.get("/clients/:id/orders", getClientOrders);

export default clientRouter;