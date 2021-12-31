import { NextFunction, Request, Response } from "express";

export function handleError(
  error: unknown,
  _req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _next: NextFunction
) {
  if (error instanceof CustomError) {
    res.status(error.statusCode).send(error.message);
  } else if (error instanceof Error) {
    res.status(500).send(error.message);
  } else {
    res.status(500).send("Sorry, something went wrong.");
  }
}

export class CustomError extends Error {
  readonly statusCode: number;
  constructor(statusCode: number, message: string) {
    super(message);
    this.name = this.constructor.name;
    this.statusCode = statusCode;
  }
}

export class NotFoundError extends CustomError {
  readonly searchValue;
  constructor(message: string, searchValue: string) {
    super(404, message);
    this.searchValue = searchValue;
  }
}

export class ValidationError extends CustomError {}
