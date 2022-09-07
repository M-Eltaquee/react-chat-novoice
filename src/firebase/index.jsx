// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
//auth
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
} from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCXJ9d8IqbipS7MlEvzW-j13sy4vMlNnfU',
  authDomain: 'realtime-chat-472a4.firebaseapp.com',
  projectId: 'realtime-chat-472a4',
  storageBucket: 'realtime-chat-472a4.appspot.com',
  messagingSenderId: '257385143824',
  appId: '1:257385143824:web:f6804de4b3d91722f37495',
  measurementId: 'G-GMYCGGWQEZ',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

// Authentication methods
const auth = getAuth(firebaseApp);
export const signUp = async (newEmail, newPassword, method) => {
  let response;
  try {
    switch (method) {
      case 'emailAndPassword':
        response = await createUserWithEmailAndPassword(
          auth,
          newEmail,
          newPassword
        );
        break;
      case 'gmail':
        response = 'gmail';
        break;
      default:
        return;
    }
  } catch (err) {
    console.log(err);
  }
};
export const signin = async () => {};
export const monitorAutState = async () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      return console.log(user);
    }
    return console.log('no');
  });
};
