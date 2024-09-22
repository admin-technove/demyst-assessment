import { Cell, Row } from '@demyst-assessment/common';
import clsx from 'clsx';
import { formatCurrency } from '../../utils/Utils';

type Props = {
  className?: string;
  rowType?: Row['RowType'];
  cells?: Cell[];
};

const RowContent: React.FC<Props> = ({ className, rowType, cells }: Props) => {
  if (!cells) {
    return null;
  }

  return (
    <tr className={className}>
      {cells.map((col) => (
        <td
          key={col.Value}
          className={clsx('py-2 px-12 border-b text-sm', {
            'font-bold': rowType === 'SummaryRow',
          })}
        >
          {formatCurrency(col.Value)}
        </td>
      ))}
    </tr>
  );
};

export default RowContent;
