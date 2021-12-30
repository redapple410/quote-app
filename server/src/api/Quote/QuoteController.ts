import { BSONTypeError } from "bson";
import { NextFunction, Request, Response } from "express";
import { MongoServerError } from "mongodb";
import { Quote } from "../../types";
import * as QuoteService from "./QuoteService";

export async function getAllQuotes(_req: Request, res: Response) {
  try {
    const quotes = await QuoteService.getAllQuotes();
    res.status(200).send(quotes);
  } catch (error) {
    res.status(500).send("Sorry, an error occurred.");
  }
}

export async function getRandomQuote(_req: Request, res: Response) {
  try {
    const quote = await QuoteService.getRandomQuote();
    if (quote) {
      res.status(200).send(quote);
    } else {
      res.status(204).send();
    }
  } catch (error) {
    res.status(500).send("Sorry, an error occurred.");
  }
}

export async function getQuote(req: Request, res: Response) {
  try {
    const quoteId = req.params.id;
    const quote = await QuoteService.getQuoteById(quoteId);
    if (quote) {
      res.status(200).send(quote);
    } else {
      res.status(404).send(`Quote with ID ${quoteId} not found.`);
    }
  } catch (error) {
    if (error instanceof BSONTypeError) {
      res.status(404).send(`Invalid ID ${req.params.id}.`);
    } else {
      res.status(500).send("Sorry, an error occurred.");
    }
  }
}

export async function createQuote(req: Request, res: Response) {
  try {
    const quoteData = req.body as Omit<Quote, "_id">;
    const quoteId = await QuoteService.createQuote(quoteData);
    if (quoteId) {
      res.status(200).send(quoteId);
    } else {
      throw new Error();
    }
  } catch (error) {
    if (error instanceof MongoServerError) {
      res.status(400).send("Improper quote format.");
    } else {
      res.status(500).send("Sorry, an error occurred.");
    }
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
