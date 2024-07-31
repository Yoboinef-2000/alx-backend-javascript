export const weakMap = new WeakMap();
export function queryAPI(endpoint) {
  if (typeof endpoint !== 'object' || endpoint === null) {
    throw new Error('Invalid endpoint');
  }

  let count = weakMap.get(endpoint) || 0;

  count += 1;

  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }
  weakMap.set(endpoint, count);
}
