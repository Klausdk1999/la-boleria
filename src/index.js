import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cakeRouter from "./routers/cakeRouter.js"
import clientRouter from "./routers/clientRouter.js"
import orderRouter from "./routers/orderRouter.js"

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use( cakeRouter );
app.use( clientRouter );
app.use( orderRouter );

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>  console.log("Server running on port " + process.env.PORT));