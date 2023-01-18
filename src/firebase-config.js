// Import the functions you need from the SDKs you need
import { getFirestore } from '@firebase/firestore'
import { getDatabase } from '@firebase/database'

import { initializeApp } from 'firebase/app'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_FB_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_FIREBASE_FIREBASE_APPID,
  measurementId: process.env.REACT_APP_FIREBASE_FIREBASE_MEASUREMENTID,
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const rt_db = getDatabase(app)
