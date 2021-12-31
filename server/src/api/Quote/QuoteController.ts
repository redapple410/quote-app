import { Request, Response } from "express";
import { CustomError } from "../../lib/error";
import { Quote } from "../../types";
import * as QuoteService from "./QuoteService";

export async function getAllQuotes(_req: Request, res: Response) {
  const quotes = await QuoteService.getAllQuotes();
  res.status(200).send(quotes);
}

export async function getRandomQuote(_req: Request, res: Response) {
  const quote = await QuoteService.getRandomQuote();
  res.status(200).send(quote);
}

export async function getQuote(req: Request, res: Response) {
  const quoteId = req.params.id;
  const quote = await QuoteService.getQuoteById(quoteId);
  if (quote) {
    res.status(200).send(quote);
  } else {
    throw new CustomError(500, "Unable to get quote.");
  }
}

export async function createQuote(req: Request, res: Response) {
  const quoteData = req.body as Omit<Quote, "_id">;
  const quoteId = await QuoteService.createQuote(quoteData);
  if (quoteId) {
    res.status(201).send(quoteId);
  } else {
    throw new CustomError(500, "Unable to create quote.");
  }
}

export async function editQuote(req: Request, res: Response) {
  const quoteId = req.params.id;
  const quoteUpdateData = req.body as Partial<Omit<Quote, "_id">>;
  const updatedQuote = await QuoteService.editQuote(quoteId, quoteUpdateData);
  if (updatedQuote) {
    res.status(200).send(updatedQuote);
  } else {
    // TODO: improve error messaging when quote not found
    throw new CustomError(500, "Unable to edit quote.");
  }
}

export async function deleteQuote(req: Request, res: Response) {
  const quoteId = req.params.id;
  const isSuccessful = await QuoteService.deleteQuote(quoteId);
  if (isSuccessful) {
    res.status(204).send();
  } else {
    // TODO: improve error messaging when quote not found
    throw new CustomError(500, "Unable to delete quote.");
  }
}
