import firebase from "firebase";
// Initialize Firebase
var config = {
    apiKey: "tytytytytytytytytytytytytytytyty",
    authDomain: "vue-firebase-chat-01.firebaseapp.com",
    databaseURL: "https://vue-firebase-chat-01.firebaseio.com",
    projectId: "vue-firebase-chat-01",
    storageBucket: "vue-firebase-chat-01.appspot.com",
    messagingSenderId: "975653954355"
  };
  const firebaseApp = firebase.initializeApp(config);
  firebaseApp.firestore().settings({  });

export default firebaseApp.firestore();
