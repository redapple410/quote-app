import { Router } from "express";
import QuoteController from "./QuoteController";

const router = Router();
const quoteController = new QuoteController();

router.get("/all", (req, res) => {
  const quotes = quoteController.getAllQuotes();
  res.send(quotes);
});

router.get("/random", (req, res) => {
  const quote = quoteController.getRandomQuote();
  res.send(quote);
});

router.post("/create", (req, res, next) => {
  next(new Error("WIP"));
});

router
  .route("/:id")
  .get((req, res) => {
    const quote = quoteController.getQuote(req.params.id);
    res.send(quote);
  })
  .put((req, res, next) => {
    next(new Error("WIP"));
  })
  .delete((req, res, next) => {
    next(new Error("WIP"));
  });

export default router;
