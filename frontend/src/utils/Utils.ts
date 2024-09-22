/**
 * Formats a number as a currency string based on the specified locale and currency.
 *
 * @param value - The numeric value to format.
 * @returns The formatted currency string.
 */
export const formatCurrency = (value: string): string => {
  if (isNaN(Number(value))) {
    return value;
  }
  return new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD',
  }).format(Number(value));
};
