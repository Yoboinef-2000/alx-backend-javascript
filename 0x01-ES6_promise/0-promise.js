export default function getResponseFromAPI() {
  const stopMakingPromisesThatYouCantKeep = new Promise(
    (resolve) => {
      resolve();
    },
  );
  return stopMakingPromisesThatYouCantKeep;
}
