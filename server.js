import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import testRoutes from "./routes/testRoutes.js";
import authRoutes from "./routes/authRoutes.js";
dotenv.config();
const app = express();

// mongoDB connection
connectDB();
//middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
// routes
app.use("/api/v1/test", testRoutes);
app.use("/api/v1/auth", authRoutes);
app.listen(process.env.PORT, () => {
  console.log(
    `server started in ${process.env.DEV_MODE} mode on server ${process.env.PORT}`
  );
});
