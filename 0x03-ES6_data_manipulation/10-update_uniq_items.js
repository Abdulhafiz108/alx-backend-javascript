export default function(map) {
  const map1 = map;

  if (!map instanceof Map) {
    throw new Error('Cannot process');
  }

  for (const key of map1.keys()) {
    if (map1.get(key) === 1) {
      map1.set(key, 100);
    }
  }
  return map1;
}
