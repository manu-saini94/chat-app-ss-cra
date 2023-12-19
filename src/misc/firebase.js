import firebase from 'firebase/app';

const config = {
  apiKey: 'AIzaSyBbx4oHHJVEm3fxm2ntMGph-uIlPoyqKAM',
  authDomain: 'chat-app-ss-cra.firebaseapp.com',
  databaseURL: 'https://chat-app-ss-cra-default-rtdb.firebaseio.com',
  projectId: 'chat-app-ss-cra',
  storageBucket: 'chat-app-ss-cra.appspot.com',
  messagingSenderId: '1074677963334',
  appId: '1:1074677963334:web:83d0db6885b9313abc8847',
};

const app = firebase.initializeApp(config);
