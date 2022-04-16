// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "react-firebase-hooks/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBY3iw88itITg0wEpcP83r-wl6T2Ji0Q5o",
  authDomain: "react-auth-todo-f3bd0.firebaseapp.com",
  projectId: "react-auth-todo-f3bd0",
  storageBucket: "react-auth-todo-f3bd0.appspot.com",
  messagingSenderId: "1032923645538",
  appId: "1:1032923645538:web:060e78fd83b95cd049f33b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
