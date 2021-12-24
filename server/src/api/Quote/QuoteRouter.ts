import { Router } from "express";
import * as QuoteController from "./QuoteController";

const router = Router();

router.get("/all", (req, res) => {
  const quotes = QuoteController.getAllQuotes();
  res.send(quotes);
});

router.get("/random", (req, res) => {
  const quote = QuoteController.getRandomQuote();
  res.send(quote);
});

router.post("/create", (req, res, next) => {
  next(new Error("WIP"));
});

router
  .route("/:id")
  .get((req, res) => {
    const quote = QuoteController.getQuote(req.params.id);
    res.send(quote);
  })
  .put((req, res, next) => {
    next(new Error("WIP"));
  })
  .delete((req, res, next) => {
    next(new Error("WIP"));
  });

export default router;
