import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { DB_NAME } from "./constants.js";

// Load environment variables from .env file
dotenv.config();

const PORT = process.env.PORT || 8000;

connectDB()
  .then(() => {
    console.log(`Server is ready to listen on PORT: ${PORT}`);
    // Start your Express app here (if using Express)
  })
  .catch((err) => {
    console.error("MongoDB connection failed", err);
  });
