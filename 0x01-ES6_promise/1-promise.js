export default function getFullResponseFromAPI(success) {
  const obj2 = {Error: 'The fake API is not working currently'};
  return new Promise((resolve, reject) => {
  if (success) {
    resolve({status: 200, body: 'Success',});
  } else {
    reject(new Error('The fake API is not working currently'));
  }
  });
}
