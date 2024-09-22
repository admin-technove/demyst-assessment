import { Row } from '@demyst-assessment/common';
import RowContent from './RowContent';
import clsx from 'clsx';

type SectionProps = {
  val: string;
  row?: Row[];
};

const Section: React.FC<SectionProps> = ({ val, row }: SectionProps) => (
  <>
    <tr>
      <td
        colSpan={3}
        className={clsx('py-2 border-b', {
          'px-4': row?.length === 0, // Category (Assest, Liabilities, Equity)
          'px-8': row && row.length > 0, // Accounts (Cash, Inventory, etc.)
        })}
      >
        <p className="font-bold">{val}</p>
      </td>
    </tr>
    {row?.map((row, index) => (
      <RowContent
        key={index}
        rowType={row.RowType}
        className={index % 2 === 0 ? 'bg-gray-100' : ''}
        cells={row.Cells}
      />
    ))}
  </>
);

export default Section;
