import express, { Application } from 'express';
import cors from 'cors';
import { BalanceSheetController } from './balance-sheet/BalanceSheet.controller';
import { BalanceSheetService } from './balance-sheet/BalanceSheet.service';
import { XeroApiClient } from './common/XeroApiClient';
import { ErrorHandler } from './common/ErrorHandler';
import { Config } from './common/Config';

export class App {
  public app: Application;

  // Controllers
  private balanceSheetController: BalanceSheetController;

  constructor() {
    this.app = express();
    this.setMiddleware();
    this.setRoutes();
    this.setErrorHandling();
  }

  private setMiddleware(): void {
    this.app.use(cors());
    this.app.use(express.json());
  }

  private setRoutes(): void {
    const config = new Config();
    const xeroApiClient = new XeroApiClient(config);

    // BalanceSheet Route
    const balanceSheetService = new BalanceSheetService(xeroApiClient);
    this.balanceSheetController = new BalanceSheetController(
      balanceSheetService
    );

    this.app.use('/api/balance-sheet', this.balanceSheetController.router);
  }

  private setErrorHandling(): void {
    this.app.use(ErrorHandler.handleError);
  }

  public getApp(): Application {
    return this.app;
  }
}
