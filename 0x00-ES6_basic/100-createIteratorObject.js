export default function createIteratorObject(report) {
  const list = [].concat(...Object.values(report.allEmployees));
  return list;
}
