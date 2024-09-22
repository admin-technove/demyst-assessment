import { useState, useEffect } from 'react';
import { BalanceSheet } from '@demyst-assessment/common';

/**
 * Custom hook to fetch and manage the balance sheet data.
 */
const useBalanceSheet = () => {
  const [balanceSheet, setBalanceSheet] = useState<BalanceSheet | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBalanceSheet = async () => {
      const response = await fetch('http://localhost:3001/api/balance-sheet'); // Hardcoded for the assessment, generally it should be in environment variables
      if (!response.ok) {
        setError(response.statusText);
        throw new Error('Network response was not ok');
      }
      const data: BalanceSheet = await response.json();
      setBalanceSheet(data);
    };

    fetchBalanceSheet();
  }, []);

  return { balanceSheet, error };
};

export default useBalanceSheet;
