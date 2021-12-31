import { NextFunction, Request, Response } from "express";
import { CustomError, NotFoundError } from "../../lib/error";
import { Quote } from "../../types";
import * as QuoteService from "./QuoteService";

export async function getAllQuotes(_req: Request, res: Response) {
  const quotes = await QuoteService.getAllQuotes();
  res.status(200).send(quotes);
}

export async function getRandomQuote(_req: Request, res: Response) {
  const quote = await QuoteService.getRandomQuote();
  if (quote) {
    res.status(200).send(quote);
  } else {
    res.status(204).send();
  }
}

export async function getQuote(req: Request, res: Response) {
  const quoteId = req.params.id;
  const quote = await QuoteService.getQuoteById(quoteId);
  if (quote) {
    res.status(200).send(quote);
  } else {
    throw new NotFoundError(`Quote with ID ${quoteId} not found.`, quoteId);
  }
}

export async function createQuote(req: Request, res: Response) {
  const quoteData = req.body as Omit<Quote, "_id">;
  const quoteId = await QuoteService.createQuote(quoteData);
  if (quoteId) {
    res.status(200).send(quoteId);
  } else {
    throw new CustomError(500, "Unable to create quote.");
  }
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
