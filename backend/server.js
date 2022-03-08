import dotenv from "dotenv";
import express from "express";
import database from "./lib/database.js";
import productRouter from "./router/productRouter.js";
import categoryRouter from "./router/categoryRouter.js";



dotenv.config();

database.init();


const server = express();

server.listen(process.env.PORT, () => {

    console.log("server is listening");
});

// server.use(cors());
server.use(express.json());
server.use(express.urlencoded({extended: true}));

server.use("/mobiz-couture", productRouter);
server.use("/mobiz-couture", categoryRouter);