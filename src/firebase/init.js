// Initialize Firebase
var config = {
    apiKey: "AIzaSyDUYYgXJ7D6BrV-Ltmm0jpW4xLJR5jicd0",
    authDomain: "vue-firebase-chat-01.firebaseapp.com",
    databaseURL: "https://vue-firebase-chat-01.firebaseio.com",
    projectId: "vue-firebase-chat-01",
    storageBucket: "vue-firebase-chat-01.appspot.com",
    messagingSenderId: "975653954355"
  };
  const firebaseApp = firebase.initializeApp(config);
  firebaseApp.firestore().settings({ timestampsInSnapshots: true });

export default firebaseApp.firestore();
