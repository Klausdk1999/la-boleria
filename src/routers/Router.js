import { Router } from "express";
import { postCake } from "../controllers/cakesController.js";
//import { getRanking, getUser , deleteURLById , postURL,getURLById,getShortURL } from "../controllers/urlsController.js";
import validateSchema from "../middlewares/schemaValidation.js";
import { cakeSchema, clientSchema, orderSchema } from "../schemas/cakeSchema.js";
const router = Router();

router.post("/cakes", validateSchema(cakeSchema), postCake);
// router.post("/clients", validateSchema(clientSchema), getURLById);
// router.post("/order", validateSchema(orderSchema), getShortURL);
// router.get("/orders", deleteURLById);
// router.get("/orders/:id", getUser);
// router.get("/clients/:id/orders", getRanking);

export default router;