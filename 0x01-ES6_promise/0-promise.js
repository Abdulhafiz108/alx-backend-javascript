export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    if (1+1 <= 3) {
      resolve(3);
    } else {
      reject(`false`);
    }
  });
}
