import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyD9XHB6jO4scRtqTtTdRAKv6xMVj0PPhaQ",
  authDomain: "disney-clone-dd8d4.firebaseapp.com",
  projectId: "disney-clone-dd8d4",
  storageBucket: "disney-clone-dd8d4.appspot.com",
  messagingSenderId: "388900730646",
  appId: "1:388900730646:web:2fdb30a7a647f66b4e8237"
};

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();
  const storage=firebase.storage();

  export {auth,provider,storage};
  export default db;
