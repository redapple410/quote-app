import express from "express";
import QuoteRouter from "./api/Quote/QuoteRouter";

const PORT = 3000;
const app = express();

app.use("/api/quote", QuoteRouter);

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});
