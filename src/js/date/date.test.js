import { getTimeOfDay, getDayStart, createHourTimeline } from './date';

describe('Test Date module', () => {
  describe('getDayStart', () => {
    test('return "null" for invalid range', () => {
      const startOfDay = getDayStart(23);

      expect(startOfDay).toBe(null);
    });
    test('returns same date with time "00:00"', () => {
      const dayStart = getDayStart(new Date('2020-05-20T16:00:00.234Z'));
      const expected = new Date('2020-05-20T00:00:00.000Z');

      expect(dayStart).toEqual(expected);
    });
  });
  describe('createHourTimeline', () => {
    test('return "null" for invalid range', () => {
      const timeline = createHourTimeline(23);

      expect(timeline).toBe(null);
    });
    test('keeps date with same day range', () => {
      const timeline = createHourTimeline(
        new Date('2020-05-20T16:00:00.000Z'),
        3
      );

      const expected = [
        new Date('2020-05-20T16:00:00.000Z'),
        new Date('2020-05-20T17:00:00.000Z'),
        new Date('2020-05-20T18:00:00.000Z'),
      ];

      expect(timeline).toEqual(expected);
    });
    test('changes date based on timezone', () => {
      const timeline = createHourTimeline(
        new Date('2020-05-20T20:00:00.000Z'),
        3,
        'Europe/Berlin'
      );

      const expected = [
        new Date('2020-05-20T22:00:00.000Z'),
        new Date('2020-05-20T23:00:00.000Z'),
        new Date('2020-05-21T00:00:00.000Z'),
      ];

      expect(timeline).toEqual(expected);
    });
  });

  describe('getTimeOfDay', () => {
    it('returns "dawn" between 6-7 hours', () => {
      const hours = [6, 7];
      const actual = hours.map(getTimeOfDay);

      const expected = Array(hours.length).fill('dawn');
      expect(actual).toEqual(expected);
    });
    it('returns "dusk" between 18-20 hours', () => {
      const hours = [18, 19, 20];
      const actual = hours.map(getTimeOfDay);
      const expected = Array(hours.length).fill('dusk');

      expect(actual).toEqual(expected);
    });
    it('returns "day" between 8-17 hours hours', () => {
      const hours = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
      const actual = hours.map(getTimeOfDay);
      const expected = Array(hours.length).fill('day');

      expect(actual).toEqual(expected);
    });
    it('returns "night" between 21-5 hours hours', () => {
      const hours = [21, 22, 23, 0, 1, 2, 3, 4, 5];
      const actual = hours.map(getTimeOfDay);
      const expected = Array(hours.length).fill('night');

      expect(actual).toEqual(expected);
    });

    it('returns `null` if invalid hour passed', () => {
      expect(() => getTimeOfDay('three')).toThrow('Invalid hour');
    });
  });
});
