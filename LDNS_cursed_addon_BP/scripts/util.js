// @ts-check

/**
 * @param {number} min 
 * @param {number} max 
 * @returns {number}
 */
export function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

/**
 * @template T
 * @param {T[]} array 
 * @returns {T}
 */
export function randomValue(array) {
  return array[Math.floor(Math.random() * array.length)];
}