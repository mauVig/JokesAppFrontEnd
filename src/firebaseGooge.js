// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDfd_wdM09lscHmDDzotiGu8xx98XhHoU",
  authDomain: "jokesapp-5135e.firebaseapp.com",
  projectId: "jokesapp-5135e",
  storageBucket: "jokesapp-5135e.appspot.com",
  messagingSenderId: "159220689326",
  appId: "1:159220689326:web:77d3e336da071c0882803f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
