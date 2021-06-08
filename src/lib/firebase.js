import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDL3kY8RmBtQUk5K4K42hBfiCr6oddaIsw',
  authDomain: 'karrestad-2.firebaseapp.com',
  projectId: 'karrestad-2',
  storageBucket: 'karrestad-2.appspot.com',
  messagingSenderId: '783667711080',
  appId: '1:783667711080:web:c6016f0ef365b3ac373fdd',
  measurementId: 'G-NTYRZ1BC72'
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };
