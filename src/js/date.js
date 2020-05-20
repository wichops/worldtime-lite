import {DateTime} from 'luxon';

export function createHourTimeline(startDate, hourCount) {
  const currentDate = DateTime.fromJSDate(startDate);
  const timeline = [];

  if (!currentDate.isValid) return null;
  for (let i = 0; i < hourCount; i++) {
    timeline.push(currentDate.plus({hours: i}).toJSDate());
  }
  return timeline;
}

export function getDayStart(date) {
  const currentDate = DateTime.fromJSDate(date).toUTC();

  if (!currentDate.isValid) return null;

  return currentDate.startOf('day').toJSDate();
}
