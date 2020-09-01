import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyA_NuKQfD4SbSbwXt-H2cEKQk7znP6BjsU',
  authDomain: 'instagram-reels-clone-4f5d1.firebaseapp.com',
  databaseURL: 'https://instagram-reels-clone-4f5d1.firebaseio.com',
  projectId: 'instagram-reels-clone-4f5d1',
  storageBucket: 'instagram-reels-clone-4f5d1.appspot.com',
  messagingSenderId: '917316754541',
  appId: '1:917316754541:web:8742da608d7e403ac3b364',
  measurementId: 'G-MKXPR8LBW3',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
