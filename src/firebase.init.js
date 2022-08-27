// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvtZkVFI9dptFzfiOTTKcgfFxTROZecs8",
  authDomain: "red-onion-project-220c0.firebaseapp.com",
  projectId: "red-onion-project-220c0",
  storageBucket: "red-onion-project-220c0.appspot.com",
  messagingSenderId: "403373256016",
  appId: "1:403373256016:web:00f17661edf1b457071055"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);


export default auth;