import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: process.env.REACT_APP_API_FB_KEY,
  authDomain: process.env.REACT_APP_FB_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FB_DATABASE_URL,
  storageBucket: process.env.REACT_APP_FB_PROJECT_ID,
  messagingSenderId: process.env.REACT_APP_FB_STORAGE_BUCKET,
  appId: process.env.REACT_APP_FB_MESSAGING_SENDER_ID
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };
