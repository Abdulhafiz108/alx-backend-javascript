export default function concatArrays(array1, array2, string) {
  array1 = [...array1, ...array2, ...string.split('')];
  return (array1);
}
