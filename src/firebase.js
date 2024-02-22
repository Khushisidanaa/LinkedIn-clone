import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCLan8dhNFdwH08SjLVr6IIbuIXcOrlkO4",
    authDomain: "linkedin-clone-5fddb.firebaseapp.com",
    projectId: "linkedin-clone-5fddb",
    storageBucket: "linkedin-clone-5fddb.appspot.com",
    messagingSenderId: "294288714350",
    appId: "1:294288714350:web:fd3f37acadb2425467547f"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth};