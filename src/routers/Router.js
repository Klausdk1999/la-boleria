import { Router } from "express";
import { getRanking, getUser , deleteURLById , postURL,getURLById,getShortURL } from "../controllers/urlsController.js";
import {schemaValidation} from "../middlewares/schemaValidation.js";
import { cakeSchema, clientSchema, orderSchema } from "../schemas/cakeSchema.js";
const router = Router();

router.post("/cakes", schemaValidation(cakeSchema), postURL);
router.post("/clients", schemaValidation(clientSchema), getURLById);
router.post("/order", schemaValidation(orderSchema), getShortURL);
router.get("/orders", deleteURLById);
router.get("/orders/:id", getUser);
router.get("/clients/:id/orders", getRanking);

export default router;