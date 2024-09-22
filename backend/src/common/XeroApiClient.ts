
import { BalanceSheet } from '@demyst-assessment/common';
import { ApiClient } from './ApiClient';

/**
 * XeroApiClient extends the ApiClient abstract class to provide
 * functionality for interacting with the Xero API.
 *
 * @extends ApiClient
 */
export class XeroApiClient extends ApiClient {
  public async fetchBalanceSheet(): Promise<BalanceSheet> {
    try {
      return (await this.axiosInstance.get<BalanceSheet>('/Reports/BalanceSheet')).data;
    } catch (error) {
      throw new Error('Failed to fetch balance sheet from Xero API');
    }
  }
}
