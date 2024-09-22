import clsx from 'clsx';
import Table from './balance-sheet/Table';
import useBalanceSheet from './balance-sheet/useBalanceSheet';

export function App() {
  const { balanceSheet } = useBalanceSheet();

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        {balanceSheet?.Reports[0].ReportTitles.map((title, index) => (
          <h1
            key={index}
            className={clsx({
              'font-bold text-lg': index === 0,
              'font-normal text-base': index > 0,
            })}
          >
            {title}
          </h1>
        ))}
      </div>
      <Table balanceSheet={balanceSheet} />
    </div>
  );
}
