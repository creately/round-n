/**
 * Rounds a number to the nearest N where N is any rational number.
 * @param a The number which will be rounded
 * @param n The number will be rounded to a multiple of this number
 */
export function roundN(a: number, _n: number): number {
  if (a < 0) {
    return -roundN(-a, _n);
  }
  const n = Math.abs(_n);
  const r = a % n;
  if (r >= n / 2) {
    return a - r + n;
  } else {
    return a - r;
  }
}

/**
 * Ceils a number to the nearest N where N is any rational number.
 * @param a The number which will be rounded up
 * @param n The number will be rounded up to a multiple of this number
 */
export function ceilN(a: number, _n: number): number {
  if (a < 0) {
    return -floorN(-a, _n);
  }
  const n = Math.abs(_n);
  const r = a % n;
  if (r > 0) {
    return a - r + n;
  } else {
    return a;
  }
}

/**
 * Floors a number to the nearest N where N is any rational number.
 * @param a The number which will be rounded down
 * @param n The number will be rounded down to a multiple of this number
 */
export function floorN(a: number, _n: number): number {
  if (a < 0) {
    return -ceilN(-a, _n);
  }
  const n = Math.abs(_n);
  const r = a % n;
  return a - r;
}
