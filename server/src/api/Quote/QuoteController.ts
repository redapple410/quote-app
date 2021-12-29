import { NextFunction, Request, Response } from "express";
import * as QuoteService from "./QuoteService";

export async function getAllQuotes(_req: Request, res: Response) {
  try {
    const quotes = await QuoteService.getAllQuotes();
    res.status(200).send(quotes);
  } catch (error) {
    res
      .status(500)
      .send(
        error instanceof Error ? error.message : "Sorry, an error occurred."
      );
  }
}

export function getRandomQuote(_req: Request, res: Response) {
  const quote = QuoteService.getRandomQuote();
  res.send(quote);
}

export function getQuote(req: Request, res: Response) {
  // TODO: validate id
  const quoteId = req.params.id;
  const quote = QuoteService.getQuote(quoteId);
  res.send(quote);
}

export function createQuote(_req: Request, _res: Response, next: NextFunction) {
  next(new Error("WIP"));
  // TODO: create new quote
}

export function editQuote(req: Request, _res: Response, next: NextFunction) {
  // TODO: validate id
  // const quoteId = req.params.id;
  next(new Error("WIP"));
  // TODO: edit existing quote
}

export function deleteQuote(req: Request, _res: Response, next: NextFunction) {
  // TODO: validate id
  // const quoteId = req.params.id;
  next(new Error("WIP"));
  // TODO: delete existing quote
}
