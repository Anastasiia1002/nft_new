
import { initializeApp } from "firebase/app";

import "firebase/storage";
import "firebase/firestore";
import env from "react-dotenv";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: env.API_KEY,
  authDomain: env.AUTH_DOMAIN,
  projectId: env.PROJECT_ID,
  storageBucket: env.STORAGE_BUCKET,
  messagingSenderId: env.MASSAGE_SENDER_ID,
  appId: env.APP_ID,
  measurementId: env.MEASUREMENT_ID
};


 const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleAuthProvider = new GoogleAuthProvider()
export const db = getFirestore(app)
