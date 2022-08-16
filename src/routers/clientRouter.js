import { Router } from "express";
import { postClient } from "../controllers/clientsController.js";
import validateSchema from "../middlewares/schemaValidation.js";
import { clientSchema } from "../schemas/cakeSchema.js";
const clientRouter = Router();

clientRouter.post("/clients", validateSchema(clientSchema), postClient);
// clientRouter.get("/clients/:id/orders", getRanking);

export default clientRouter;