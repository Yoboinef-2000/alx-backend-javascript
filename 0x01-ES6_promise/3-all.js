import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  let body, firstName, lastName;

  body = photo.body;
  firstName = user.firstName;
  lastName = user.lastName;

  return Promise.all([uploadPhoto(), createUser()])
    .then((results) => {
      const [photo, user] = results;
      console.log(`${body} ${firstName} ${lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
