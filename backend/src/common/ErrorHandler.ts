import { Request, Response, NextFunction } from 'express';

export class ErrorHandler {
  public static handleError(
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
  ): void {
    console.error(err);
    res.status(500).json({
      error: {
        message: err.message || 'Internal Server Error',
        status: 500,
      },
    });
  }
}
