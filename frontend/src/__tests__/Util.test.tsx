import { formatCurrency } from '../utils/Utils';

describe('Util', () => {
  it('should not format if value is not a number', () => {
    expect(formatCurrency('abc')).toBe('abc');
  });

  it('should format currency correctly', () => {
    expect(formatCurrency('100')).toBe('$100.00');
  });
});
