import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import firebase from "firebase/app";
import "firebase/firestore";


  var firebaseConfig = {
    apiKey: "AIzaSyCTQeQzkEALsl_WUIScnVhk1aDNhDrZ8e8",
    authDomain: "dsc-sms-messaging.firebaseapp.com",
    databaseURL: "https://dsc-sms-messaging.firebaseio.com",
    projectId: "dsc-sms-messaging",
    storageBucket: "dsc-sms-messaging.appspot.com",
    messagingSenderId: "655390428748",
    appId: "1:655390428748:web:a7b4940f2b049aca7f2ee9",
    measurementId: "G-6EKP0HV34L"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


// This prevents a warning message for changes to firestore timestamp syntax in the console
// Firestore is still in Beta - in the future this won't be necessary
const firestore = firebase.firestore();


ReactDOM.render(
    <App />
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
