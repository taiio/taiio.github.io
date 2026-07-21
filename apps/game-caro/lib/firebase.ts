import { initializeApp } from "firebase/app"
import { getDatabase } from "firebase/database"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtQHaTUYTqT_ApDKl29IukeXmxkpAWzzI",
  authDomain: "gomoku-game-p2p.firebaseapp.com",
  databaseURL: "https://gomoku-game-p2p-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "gomoku-game-p2p",
  storageBucket: "gomoku-game-p2p.firebasestorage.app",
  messagingSenderId: "16145037845",
  appId: "1:16145037845:web:dc733365a8f54c4b31ac1c",
  measurementId: "G-L56S0FWWLT"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const database = getDatabase(app)
