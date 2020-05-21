import {DateTime} from 'luxon';

export function createHourTimeline(startDate, hourCount, timezone) {
  const currentDate = DateTime.fromJSDate(startDate);
  const timeline = [];

  if (!currentDate.isValid) return null;
  for (let i = 0; i < hourCount; i++) {
    const time = currentDate.plus({hours: i});
    timeline.push(time.toJSDate());
  }
  return timeline.map(
    t => new Date(t.toLocaleString('en-US', {timeZone: timezone})),
  );
}

export function getDayStart(date, timezone) {
  const currentDate = DateTime.fromJSDate(date);

  if (!currentDate.isValid) return null;

  const start = currentDate
    .startOf('day')
    .setZone(timezone, {keepLocalTime: true});

  return start.toJSDate();
}
