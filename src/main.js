import { createApp } from 'vue'
import './style.sass'
import App from './App.vue'

createApp(App).mount('#app')

// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js'
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyC76LEsRhfFE7wD4n5B0bc2H00C10sIYmg',
  authDomain: 'set-challenge.firebaseapp.com',
  projectId: 'set-challenge',
  storageBucket: 'set-challenge.appspot.com',
  messagingSenderId: '278465828125',
  appId: '1:278465828125:web:6c0c17f3f0cab29d373df4',
  measurementId: 'G-5EZT9W6S8J',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
