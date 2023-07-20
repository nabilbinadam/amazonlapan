import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  // ...
  apiKey: "AIzaSyBBoi7s7gVoVOksUsJkyBFyqcqNg00OHVA",
  authDomain: "clone-a621f.firebaseapp.com",
  projectId: "clone-a621f",
  storageBucket: "clone-a621f.appspot.com",
  messagingSenderId: "172011822221",
  appId: "1:172011822221:web:a9a8e485237bf5a46e56c4",
  measurementId: "G-E33EJNGLC6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export {getAuth};