import express from "express";
import QuoteRouter from "./api/Quote/QuoteRouter";
import { connectToDatabase } from "./lib/database";

const PORT = 3000;
const app = express();

connectToDatabase()
  .then(() => {
    app.use("/api/quote", QuoteRouter);

    app.listen(PORT, () => {
      console.log(`Listening at http://localhost:${PORT}`);
    });
  })
  .catch((error: Error) => {
    console.error("Database connection failed:", error);
    process.exit(1);
  });
