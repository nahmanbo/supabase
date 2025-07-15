import express from "express";
import userRouter from "./routes/userRouter.js";
import productRouter from "./routes/productRouter.js";
import { logger } from "./utils/loggerHelper.js";

const PORT = process.env.PORT || 1234;
const server = express();

//-------------Middleware---------------
server.use(express.json());  
server.use(logger);         

//-------------Routes---------------
server.use("/user", userRouter);
server.use("/product", productRouter);

//-------------Start server---------------
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
