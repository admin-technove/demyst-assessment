import { ApiClient } from '../common/ApiClient';
import { BalanceSheet } from '@demyst-assessment/common';

export class BalanceSheetService {
  private apiClient: ApiClient;

  constructor(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  public async getBalanceSheet(): Promise<BalanceSheet> {
    return this.apiClient.fetchBalanceSheet();
  }
}
