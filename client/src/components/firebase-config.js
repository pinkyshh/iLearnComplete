import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyDaw7pcJbIIR0ezpmPGSH200aYhJodwoLE',
    authDomain: 'ilearn-sp2.firebaseapp.com',
    projectId: 'ilearn-sp2',
    storageBucket: 'ilearn-sp2.appspot.com',
    messagingSenderId: '443971870609',
    appId: '1:443971870609:web:14abf2870e7e9fa50d4430'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const user = auth.currentUser
