import express from "express";
import authRouter from "./routes/authRouter.js";
import productRouter from "./routes/productRouter.js";
import { logger } from "./utils/loggerHelper.js";

const PORT = process.env.PORT || 1234;
const server = express();

//-------------Middleware---------------
server.use(express.json());
server.use(logger);

//-------------Routes---------------
server.use("/api/auth", authRouter);
server.use("/api/products", productRouter);

//-------------Start server---------------
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
