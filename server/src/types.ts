import { ObjectId } from "mongodb";

export interface Quote {
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

export type Month =
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
