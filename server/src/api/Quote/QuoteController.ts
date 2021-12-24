import QuoteService from "./QuoteService";

class QuoteController {
  private quoteService = new QuoteService();

  getAllQuotes() {
    return this.quoteService.getAllQuotes();
  }

  getRandomQuote() {
    return this.quoteService.getRandomQuote();
  }

  getQuote(id: string) {
    // TODO: validate id
    return this.quoteService.getQuote(id);
  }

  createQuote() {
    // create new quote
  }

  editQuote(id: string) {
    // edit existing quote
  }

  deleteQuote(id: string) {
    // delete existing quote
  }
}

export default QuoteController;
