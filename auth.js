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
  "maradapavan18@gmail.com",
  "renukayarabati37@gmail.com"
];

const provider = new GoogleAuthProvider();

window.login = function () {
  signInWithPopup(auth, provider)
    .then((result) => {
      const email = result.user.email.toLowerCase();

      if (!allowedUsers.includes(email)) {
        alert("❤️ This surprise is only for someone special.");
        signOut(auth);
        return;
      }

      // Call your function to continue
      showMainContent();   // <-- replace with your actual function if different
    })
    .catch((error) => {
      console.log(error);
    });
};
