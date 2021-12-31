import { BSONTypeError } from "bson";
import { MongoServerError, ObjectId } from "mongodb";
import { collections } from "../../lib/database";
import { ValidationError } from "../../lib/error";
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
  try {
    const quoteId = new ObjectId(id);
    return (await collections.quote?.findOne({ _id: quoteId })) as Quote;
  } catch (error) {
    if (error instanceof BSONTypeError) {
      throw new ValidationError(404, `Invalid ID ${id}.`);
    }
    throw error;
  }
}

export async function createQuote(data: Omit<Quote, "_id">) {
  try {
    const newQuote = await collections.quote?.insertOne(data);
    if (newQuote) {
      return newQuote.insertedId.toString();
    }
    return null;
  } catch (error) {
    if (
      error instanceof MongoServerError &&
      error.message.includes("validation")
    ) {
      throw new ValidationError(400, "Improper quote format.");
    }
    throw error;
  }
}

export async function editQuote(id: string, data: Partial<Omit<Quote, "_id">>) {
  try {
    const quoteId = new ObjectId(id);
    const updatedDocument = await collections.quote?.findOneAndUpdate(
      { _id: quoteId },
      { $set: data },
      { returnDocument: "after" }
    );
    if (updatedDocument?.ok) {
      return updatedDocument.value as Quote;
    }
    return null;
  } catch (error) {
    if (error instanceof BSONTypeError) {
      throw new ValidationError(404, `Invalid ID ${id}.`);
    } else if (
      error instanceof MongoServerError &&
      error.message.includes("validation")
    ) {
      throw new ValidationError(400, "Improper quote format.");
    }
    throw error;
  }
}

export function deleteQuote(/* id: string */) {
  // delete existing quote
}
