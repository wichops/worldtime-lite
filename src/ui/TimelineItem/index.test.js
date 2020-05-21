import React from 'react';
import TimelineItem from './index';
import {createHourTimeline} from '../../js/date';

import {render} from '@testing-library/react';
import {screen} from '@testing-library/dom';

describe('<TimelineItem />', () => {
  test('renders date if hour is "00:00"', () => {
    const {container, getByText} = render([
      <TimelineItem time={new Date('2020-05-20T00:00:00.234Z')} key="1" />,
      <TimelineItem time={new Date('2020-01-08T00:00:00.234Z')} key="2" />,
    ]);
    expect(container.firstChild).toHaveTextContent('May20');
    expect(container.lastChild).toHaveTextContent('Jan8');
  });
  test('uses black bg if hour is between 21:00-5:00', () => {
    const dates = createHourTimeline(new Date('2020-05-20T21:00:00.234Z'), 8);
    const {container, getByText} = render(
      dates.map(d => <TimelineItem time={d} key={d} />),
    );
    Array.from(container.children).forEach(c => {
      expect(c).toHaveClass('bg-black');
    });
  });
  test('uses gray bg if hour is between 8:00-5:00', () => {
    const dates = createHourTimeline(new Date('2020-05-20T08:00:00.234Z'), 9);
    const {container, getByText} = render(
      dates.map(d => <TimelineItem time={d} key={d} />),
    );
    Array.from(container.children).forEach(c =>
      expect(c).toHaveClass('bg-gray-200'),
    );
  });

  test('uses blue bg if hour is between 6:00-7:00 and 18:00-20:00', () => {
    const dates = createHourTimeline(new Date('2020-05-20T08:00:00.234Z'), 9);
    const {container, getByText} = render(
      dates.map(d => <TimelineItem time={d} key={d} />),
    );
    Array.from(container.children).forEach(c =>
      expect(c).toHaveClass('bg-gray-200'),
    );
  });
});
