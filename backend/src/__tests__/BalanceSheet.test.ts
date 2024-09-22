import request from 'supertest';
import app from '../main';
import { XeroApiClient } from '../common/XeroApiClient';
import { BalanceSheet } from '@demyst-assessment/common';

jest.mock('../common/XeroApiClient', () => {
  return {
    XeroApiClient: jest.fn().mockImplementation(() => {
      return {
        fetchBalanceSheet: jest.fn().mockResolvedValue({
          Status: 'OK',
          Reports: [
            {
              ReportID: 'BalanceSheet',
              ReportName: 'Balance Sheet',
              ReportType: 'BalanceSheet',
              ReportTitles: [
                'Balance Sheet',
                'Demo Org',
                'As at 22 September 2024',
              ],
              ReportDate: '22 September 2024',
              UpdatedDateUTC: '/Date(1727007973834)/',
              Fields: [],
              Rows: [],
            },
          ],
        }),
      };
    }),
  };
});

describe('GET /balance-sheet', () => {
  it('should return balance sheet data', async () => {
    const balanceSheet: BalanceSheet = (
      await request(app).get('/api/balance-sheet')
    ).body;
    expect(balanceSheet.Status).toBe('OK');
  });
});
