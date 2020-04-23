import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBooOkk78jo8YzUwMMkAriiKrTpsmoqKz0",
    authDomain: "new-painthouse.firebaseapp.com",
    databaseURL: "https://new-painthouse.firebaseio.com",
    projectId: "new-painthouse",
    storageBucket: "new-painthouse.appspot.com",
    messagingSenderId: "356807478076",
    appId: "1:356807478076:web:6ebe57776587249edeac39",
    measurementId: "G-TNTJQJHGJ4"
};

//firebase.analytics();
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();

export default firebase;