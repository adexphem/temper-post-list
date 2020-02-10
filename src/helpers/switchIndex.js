export function switchIndex(items, index1, index2) {
  const results = [...items];
  results[index1] = items[index2];
  results[index2] = items[index1];

  return results;
}
