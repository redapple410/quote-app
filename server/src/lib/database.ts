import dotenv from "dotenv";
import { Collection, MongoClient } from "mongodb";

export const collections: { quote?: Collection } = {};

export async function connectToDatabase() {
  dotenv.config({ path: "../.env" });

  const connectionUrl = process.env.DB_CONNECTION_URL;
  const databaseName = process.env.DB_NAME;
  const quoteCollectionName = process.env.DB_QUOTE_COLLECTION_NAME;

  if (!connectionUrl || !databaseName || !quoteCollectionName) {
    throw new Error("A required env variable is undefined");
  }

  const client = new MongoClient(connectionUrl);
  await client.connect();

  const database = client.db(databaseName);
  const quoteCollection = database.collection(quoteCollectionName);
  collections.quote = quoteCollection;

  console.log(`Connected to database ${databaseName}`);
}
