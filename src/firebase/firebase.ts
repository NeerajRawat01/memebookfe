// Import the functions you need from the SDKs you need
import { initializeApp, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyCPOlgmUaYgGsHn7R9XFaamyRTguGdqdMQ",
  authDomain: "memebook-14fdf.firebaseapp.com",
  projectId: "memebook-14fdf",
  storageBucket: "memebook-14fdf.appspot.com",
  messagingSenderId: "919893381049",
  appId: "1:919893381049:web:4126cedf2119478eabb068",
  measurementId: "G-6Y102G1703",
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
const createFirebaseApp = (config = { firebaseConfig }) => {
  try {
    return getApp();
  } catch (e) {
    return initializeApp(firebaseConfig);
  }
};

const app = createFirebaseApp({ firebaseConfig });
export const auth = getAuth();
