import { Router } from "express";
import { postCake } from "../controllers/cakesController.js";
import validateSchema from "../middlewares/schemaValidation.js";
import { cakeSchema} from "../schemas/cakeSchema.js";
const cakeRouter = Router();

cakeRouter.post("/cakes", validateSchema(cakeSchema), postCake);

export default cakeRouter;