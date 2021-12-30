/* eslint-disable @typescript-eslint/no-misused-promises */
import express, { Router } from "express";
import * as QuoteController from "./QuoteController";

const router = Router();
router.use(express.json());

router.get("/all", QuoteController.getAllQuotes);

router.get("/random", QuoteController.getRandomQuote);

router.post("/create", QuoteController.createQuote);

router
  .route("/:id")
  .get(QuoteController.getQuote)
  .put(QuoteController.editQuote)
  .delete(QuoteController.deleteQuote);

export default router;
