import { initializeApp, getApp, getApps } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.KEY,
  authDomain: 'testing-projects-373f0.firebaseapp.com',
  projectId: 'testing-projects-373f0',
  storageBucket: 'testing-projects-373f0.appspot.com',
  messagingSenderId: '319109786606',
  appId: '1:319109786606:web:34955bbcaba2eca7907cff'
}

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp()

const auth = getAuth(app)
const firestore = getFirestore(app)

export { auth, firestore, app }
