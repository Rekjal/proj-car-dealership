import * as firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID 
}

//call initializeApp() which creates & initializes an instance of Firebase application.  
//pass in firebaseConfig as an argument. That way, Firebase knows exactly which Firebase project 
//should be accessed.
firebase.initializeApp(firebaseConfig);  
//Firestore is used as database, hence call firebase.firestore()
firebase.firestore();

export default firebase;