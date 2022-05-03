import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC8I0Y3jW0Lcoxe5wjoGBlhsSs1taw6AB8",
    authDomain: "journalapp-4d018.firebaseapp.com",
    projectId: "journalapp-4d018",
    storageBucket: "journalapp-4d018.appspot.com",
    messagingSenderId: "676458537990",
    appId: "1:676458537990:web:a7febe7d6f2396a5350f87",
    measurementId: "G-MEY818N5KE"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase,
}