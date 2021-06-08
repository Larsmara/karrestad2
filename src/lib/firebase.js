import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAt0oYn4nDCM4uaBah-q5asQVlLOtejcpE',
  authDomain: 'karrestad2-dev.firebaseapp.com',
  projectId: 'karrestad2-dev',
  storageBucket: 'karrestad2-dev.appspot.com',
  messagingSenderId: '596289995554',
  appId: '1:596289995554:web:4a4c51fd71f40e81ca9b7b'
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };
