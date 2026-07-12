import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCsgYlbQGVqsvMHW1ePowbzpJ5Va_408tY",
  authDomain: "birthday-surprise-7368.firebaseapp.com",
  projectId: "birthday-surprise-7368",
  storageBucket: "birthday-surprise-7368.firebasestorage.app",
  messagingSenderId: "897984473203",
  appId: "1:897984473203:web:799b7e28abf5ddb9152206"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const allowedUsers = [
  "kagithapallidhilleswararao@gmail.com",
  "saiandkumar11@gmail.com"
];

const provider = new GoogleAuthProvider();

signInWithPopup(auth, provider)
  .then((result) => {
    const email = result.user.email.toLowerCase();

    if (!allowedUsers.includes(email)) {
      alert("Access Denied!");
      signOut(auth);
      document.body.innerHTML =
        "<h1 style='text-align:center;margin-top:100px'>❌ Access Denied</h1>";
    }
  })
  .catch((error) => {
    console.log(error);
  });
