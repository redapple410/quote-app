import { ObjectId } from "mongodb";
import { collections } from "../../lib/database";

interface Quote {
  _id: ObjectId;
  quote: {
    author?: string;
    content: string;
  }[];
  date?: {
    year: string;
    month: Month;
  };
  source?: string;
}

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

export function getQuote(id: string) {
  const idx = parseInt(id);
  return quotes[idx];
}

export function createQuote() {
  // create new quote
}

export function editQuote(/* id: string */) {
  // edit existing quote
}

export function deleteQuote(/* id: string */) {
  // delete existing quote
}

type Month =
  | "01"
  | "02"
  | "03"
  | "04"
  | "05"
  | "06"
  | "07"
  | "08"
  | "09"
  | "10"
  | "11"
  | "12";

// TODO: use real database with proper ids etc.
const quotes = [
  {
    quote: [
      {
        author: "Alice",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        author: "Bob",
        content: "Quisque eget vehicula felis, eu consectetur leo.",
      },
    ],
    date: {
      year: "2021",
      month: "03",
    },
    source: "https://google.com",
  },
  {
    quote: [
      {
        author: "Eve",
        content: "Sed mattis tempor ultricies.",
      },
    ],
    source: "https://youtube.com",
  },
  {
    quote: [
      {
        author: "Carol",
        content:
          "Suspendisse eget mi aliquam, scelerisque tellus in, euismod dui.",
      },
    ],
    date: {
      year: "2021",
      month: "07",
    },
  },
  {
    quote: [
      {
        content: "Sed malesuada elit in rutrum posuere.",
      },
    ],
  },
];
