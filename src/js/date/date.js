import { DateTime } from 'luxon';

export const DAWN = 'dawn';
export const DAY = 'day';
export const NIGHT = 'night';
export const DUSK = 'dusk';

export function createHourTimeline(startDate, hourCount, timezone) {
  const currentDate = DateTime.fromJSDate(startDate);
  const timeline = [];

  if (!currentDate.isValid) return null;
  for (let i = 0; i < hourCount; i++) {
    const time = currentDate.plus({ hours: i });
    timeline.push(time.toJSDate());
  }
  return timeline.map(
    (t) => new Date(t.toLocaleString('en-US', { timeZone: timezone }))
  );
}

export function getDayStart(date, timezone) {
  const currentDate = DateTime.fromJSDate(date);

  if (!currentDate.isValid) return null;

  const start = currentDate
    .startOf('day')
    .setZone(timezone, { keepLocalTime: true });

  return start.toJSDate();
}

export function getTimeOfDay(hours) {
  switch (hours) {
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
      return 'day';
    case 21:
    case 22:
    case 23:
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      return 'night';
    case 18:
    case 19:
    case 20:
      return 'dusk';
    case 6:
    case 7:
      return 'dawn';
    default:
      throw Error('Invalid hour: should be a number between 0 and 23');
  }
}
