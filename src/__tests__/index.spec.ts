import { roundN, ceilN, floorN } from '..';

describe('roundN', () => {
  [
    // positive
    { val: 125, num: 30, out: 120 },
    { val: 145, num: 30, out: 150 },
    { val: 12.5, num: 3, out: 12 },
    { val: 14.5, num: 3, out: 15 },
    { val: 12.7, num: 2.5, out: 12.5 },
    { val: 14.7, num: 2.5, out: 15 },
    { val: 11, num: 2.5, out: 10 },
    { val: 12, num: 2.5, out: 12.5 },
    // negative
    { val: -125, num: 30, out: -120 },
    { val: -145, num: 30, out: -150 },
    { val: -12.5, num: 3, out: -12 },
    { val: -14.5, num: 3, out: -15 },
    { val: -12.7, num: 2.5, out: -12.5 },
    { val: -14.7, num: 2.5, out: -15 },
    { val: -11, num: 2.5, out: -10 },
    { val: -12, num: 2.5, out: -12.5 },
  ].forEach(({ val, num, out }) => {
    it(`should round ${val} to the nearest ${num} (${out})`, () => {
      expect(roundN(val, num)).toBe(out);
    });
  });
});

describe('ceilN', () => {
  [
    // positive
    { val: 125, num: 30, out: 150 },
    { val: 145, num: 30, out: 150 },
    { val: 12.5, num: 3, out: 15 },
    { val: 14.5, num: 3, out: 15 },
    { val: 12.7, num: 2.5, out: 15 },
    { val: 14.7, num: 2.5, out: 15 },
    { val: 11, num: 2.5, out: 12.5 },
    { val: 12, num: 2.5, out: 12.5 },
    // negative
    { val: -125, num: 30, out: -120 },
    { val: -145, num: 30, out: -120 },
    { val: -12.5, num: 3, out: -12 },
    { val: -14.5, num: 3, out: -12 },
    { val: -12.7, num: 2.5, out: -12.5 },
    { val: -14.7, num: 2.5, out: -12.5 },
    { val: -11, num: 2.5, out: -10 },
    { val: -12, num: 2.5, out: -10 },
  ].forEach(({ val, num, out }) => {
    it(`should ceil ${val} to the nearest ${num} (${out})`, () => {
      expect(ceilN(val, num)).toBe(out);
    });
  });
});

describe('floorN', () => {
  [
    // positive
    { val: 125, num: 30, out: 120 },
    { val: 145, num: 30, out: 120 },
    { val: 12.5, num: 3, out: 12 },
    { val: 14.5, num: 3, out: 12 },
    { val: 12.7, num: 2.5, out: 12.5 },
    { val: 14.7, num: 2.5, out: 12.5 },
    { val: 11, num: 2.5, out: 10 },
    { val: 12, num: 2.5, out: 10 },
    // negative
    { val: -125, num: 30, out: -150 },
    { val: -145, num: 30, out: -150 },
    { val: -12.5, num: 3, out: -15 },
    { val: -14.5, num: 3, out: -15 },
    { val: -12.7, num: 2.5, out: -15 },
    { val: -14.7, num: 2.5, out: -15 },
    { val: -11, num: 2.5, out: -12.5 },
    { val: -12, num: 2.5, out: -12.5 },
  ].forEach(({ val, num, out }) => {
    it(`should floor ${val} to the nearest ${num} (${out})`, () => {
      expect(floorN(val, num)).toBe(out);
    });
  });
});
