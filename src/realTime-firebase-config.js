// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getDatabase } from '@firebase/database'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyC_Sa5ULqLrv5MfSa6AuUcrs52FhidC8rA',
  authDomain: 'goandbuild-dce40.firebaseapp.com',
  databaseURL: 'https://goandbuild-dce40-default-rtdb.firebaseio.com',
  projectId: 'goandbuild-dce40',
  storageBucket: 'goandbuild-dce40.appspot.com',
  messagingSenderId: '113883990119',
  appId: '1:113883990119:web:e3542937420b60f3c8acc2',
  measurementId: 'G-YLSV7HE61T',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getDatabase(app)
