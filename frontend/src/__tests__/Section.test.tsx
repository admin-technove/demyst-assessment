import { render } from '@testing-library/react';
import Section from '../app/balance-sheet/Section';
import '@testing-library/jest-dom';

describe('Section', () => {
  it('should render heading', () => {
    const { getByText } = render(<Section val="Asset" />);
    expect(getByText('Asset')).toBeInTheDocument();
  });

  it('should have correct padding based on row data', () => {
    const { container: topLevel } = render(<Section val="Asset" row={[]} />);
    expect(topLevel.querySelector('td.px-4')).toBeInTheDocument();

    const { container: secondLevel } = render(
      <Section
        val="Bank"
        row={[
          {
            RowType: 'Row',
            Cells: [{ Value: 'Deposit' }, { Value: '100' }, { Value: '129' }],
          },
        ]}
      />
    );
    expect(secondLevel.querySelector('td.px-8')).toBeInTheDocument();
  });
});
