import { Router, Request, Response, NextFunction } from 'express';
import { BalanceSheetService } from './BalanceSheet.service';

export class BalanceSheetController {
  public router: Router;
  private balanceSheetService: BalanceSheetService;

  constructor(balanceSheetService: BalanceSheetService) {
    this.router = Router();
    this.balanceSheetService = balanceSheetService;
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get('/', this.getBalanceSheet.bind(this));
  }

  private async getBalanceSheet(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const balanceSheetData = await this.balanceSheetService.getBalanceSheet();
      res.json(balanceSheetData);
    } catch (error) {
      next(error);
    }
  }
}
