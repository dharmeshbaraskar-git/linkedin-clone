import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBMO0SRBf_MtKw4cUAyhFIdqxcxKPkcL0Y",
    authDomain: "linkedin-clone-4a5cc.firebaseapp.com",
    projectId: "linkedin-clone-4a5cc",
    storageBucket: "linkedin-clone-4a5cc.appspot.com",
    messagingSenderId: "252927763740",
    appId: "1:252927763740:web:df4d3e418dbf0bae3c46d9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth = firebase.auth();
export { db, auth };
