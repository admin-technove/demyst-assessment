import { render } from '@testing-library/react';
import RowContent from '../app/balance-sheet/RowContent';
import { Cell } from '@demyst-assessment/common';
import '@testing-library/jest-dom';

describe('RowContent', () => {
  it('should not render when no data is passed', () => {
    const { container } = render(<RowContent />);
    expect(container).toBeEmptyDOMElement();
  });

  it('should render cells with correct data', () => {
    const cells: Cell[] = [{ Value: '100' }, { Value: '200' }];
    const { getByText } = render(<RowContent cells={cells} />);
    expect(getByText('$100.00')).toBeInTheDocument();
    expect(getByText('$200.00')).toBeInTheDocument();
  });

  it('should have bold font for SummaryRow', () => {
    const cells: Cell[] = [{ Value: '100' }];
    const { container } = render(
      <RowContent rowType="SummaryRow" cells={cells} />
    );
    expect(container.querySelector('td')).toHaveClass('font-bold');
  });
});
