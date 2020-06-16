import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCzAYHOrlbXwy7ti-A5FqBYjRERMCZEI1U",
    authDomain: "login-438bd.firebaseapp.com",
    databaseURL: "https://login-438bd.firebaseio.com",
    projectId: "login-438bd",
    storageBucket: "login-438bd.appspot.com",
    messagingSenderId: "209558321665",
    appId: "1:209558321665:web:e8dd40c361fa8723de1e00",
    measurementId: "G-HB07L5KP9J"
  };

  const fire = firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  export default fire;