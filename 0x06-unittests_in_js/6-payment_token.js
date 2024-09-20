function getPaymentTokenFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({ data: 'Successful response from the API' });
    } else {
      resolve();
      // Do nothing or optionally reject the promise
      // reject(new Error('Failed to get payment token')); // Uncomment to handle failures
    }
  });
}

module.exports = getPaymentTokenFromAPI;
