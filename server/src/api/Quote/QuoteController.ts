import * as QuoteService from "./QuoteService";

export function getAllQuotes() {
  return QuoteService.getAllQuotes();
}

export function getRandomQuote() {
  return QuoteService.getRandomQuote();
}

export function getQuote(id: string) {
  // TODO: validate id
  return QuoteService.getQuote(id);
}

export function createQuote() {
  // create new quote
}

export function editQuote(id: string) {
  // edit existing quote
}

export function deleteQuote(id: string) {
  // delete existing quote
}
