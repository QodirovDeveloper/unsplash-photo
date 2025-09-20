import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSNmUlv8yuS3_7TzVuGfFKu7BNxpzoAJI",
  authDomain: "hasanboy-app.firebaseapp.com",
  projectId: "hasanboy-app",
  storageBucket: "hasanboy-app.appspot.com",
  messagingSenderId: "908352366144",
  appId: "1:908352366144:web:64fdf28e18c5d6162221a5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// auth
export const auth = getAuth(app);
export const db = getFirestore(app);
