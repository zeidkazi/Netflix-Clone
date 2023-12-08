import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "",
    authDomain: "netflix-clone-5e922.firebaseapp.com",
    projectId: "netflix-clone-5e922",
    storageBucket: "netflix-clone-5e922.appspot.com",
    messagingSenderId: "1077380448939",
    appId: "1:1077380448939:web:5a59b7781e144950102dee"
  };

  // to initialize the firebase App
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  // Us these for db & auth
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {auth};

  export default db;