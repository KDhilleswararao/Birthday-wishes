import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged
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

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account"
});

const allowedUsers = [
  "kagithapallidhilleswararao@gmail.com",
  "maradapavan18@gmail.com",
  "renukayarabati37@gmail.com"
];

const loginBtn = document.getElementById("googleLoginBtn");

loginBtn.addEventListener("click", async () => {

  try {

    const result = await signInWithPopup(auth, provider);

    const email = result.user.email.toLowerCase();

    if (!allowedUsers.includes(email)) {

      alert("❤️ This surprise is only for someone special.");

      await signOut(auth);

      return;

    }

    document.getElementById("authScreen").style.display = "none";
    document.getElementById("website").style.display = "block";

  } catch (err) {

    console.error(err);
    alert(err.message);

  }

});

onAuthStateChanged(auth, (user) => {

  if (!user) return;

  const email = user.email.toLowerCase();

  if (allowedUsers.includes(email)) {

    document.getElementById("authScreen").style.display = "none";
    document.getElementById("website").style.display = "block";

  }

});
