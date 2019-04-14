import firebase from 'firebase/app';
import 'firebase/database';

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "md-preview.firebaseapp.com",
  databaseURL: "https://md-preview.firebaseio.com",
  projectId: "md-preview",
  storageBucket: "md-preview.appspot.com",
  messagingSenderId: "674969428435"
};

firebase.initializeApp(config);

export default firebase.database();