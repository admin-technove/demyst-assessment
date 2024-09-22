import React from 'react';
import useBalanceSheet from './useBalanceSheet';
import Section from './Section';
import { BalanceSheet } from '@demyst-assessment/common';

type Props = {
  balanceSheet: BalanceSheet | null;
};

const Table: React.FC<Props> = ({ balanceSheet }: Props) => (
  <div className="overflow-x-auto">
    <table className="min-w-full bg-white border border-gray-200">
      <tbody>
        {balanceSheet?.Reports[0].Rows.map((row, index) => (
          <Section key={index} val={row.Title ?? ''} row={row.Rows} />
        ))}
      </tbody>
    </table>
  </div>
);

export default Table;
