import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import QuoteRouter from "./api/Quote/QuoteRouter";
import { connectToDatabase } from "./lib/database";
import { handleError } from "./lib/error";

const PORT = 3000;
const app = express();

dotenv.config({ path: "../.env" });

const CORS_OPTIONS = {
  origin: process.env.CLIENT_ORIGIN ?? "",
  optionsSuccessStatus: 204,
};

connectToDatabase()
  .then(() => {
    app.use(cors(CORS_OPTIONS));

    app.use("/api/quote", QuoteRouter);

    app.use(handleError);

    app.listen(PORT, () => {
      console.log(`Listening at http://localhost:${PORT}`);
    });
  })
  .catch((error: Error) => {
    console.error("Database connection failed:", error);
    process.exit(1);
  });
