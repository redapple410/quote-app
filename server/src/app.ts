import express from "express";
import QuoteRouter from "./api/Quote/QuoteRouter";
import { connectToDatabase } from "./lib/database";
import { handleError } from "./lib/error";

const PORT = 3000;
const app = express();

connectToDatabase()
  .then(() => {
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
