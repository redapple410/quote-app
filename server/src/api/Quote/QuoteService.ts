import { ObjectId } from "mongodb";
import { collections } from "../../lib/database";
import { Quote } from "../../types";

export async function getAllQuotes() {
  return (await collections.quote?.find({}).toArray()) as Quote[];
}

export async function getRandomQuote() {
  const cursor = collections.quote?.aggregate([{ $sample: { size: 1 } }]);
  if (await cursor?.hasNext()) {
    return (await cursor?.next()) as Quote;
  }
  return null;
}

export async function getQuoteById(id: string) {
  const quoteId = new ObjectId(id);
  return (await collections.quote?.findOne({ _id: quoteId })) as Quote;
}

export async function createQuote(data: Omit<Quote, "_id">) {
  const newQuote = await collections.quote?.insertOne(data);
  if (newQuote) {
    return newQuote.insertedId.toString();
  }
  return null;
}

export function editQuote(/* id: string */) {
  // edit existing quote
}

export function deleteQuote(/* id: string */) {
  // delete existing quote
}
