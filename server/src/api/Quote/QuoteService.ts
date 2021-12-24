interface Quote {
  quote: {
    author?: string;
    content: string;
  }[];
  date?: Date;
  source?: string;
}

export function getAllQuotes() {
  return quotes;
}

export function getRandomQuote() {
  const idx = Math.floor(Math.random() * quotes.length);
  return quotes[idx];
}

export function getQuote(id: string) {
  const idx = parseInt(id);
  return quotes[idx];
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

// TODO: use real database with proper ids etc.
const quotes: Quote[] = [
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
    date: new Date("2021-03-14T00:00:00+0000"),
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
    date: new Date("2021-07-01T00:00:00+0000"),
  },
  {
    quote: [
      {
        content: "Sed malesuada elit in rutrum posuere.",
      },
    ],
  },
];
