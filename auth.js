import { auth, provider } from "./firebase.js";

import {
  signInWithPopup,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

// ✅ Allowed Gmail accounts
const allowedUsers = [
  "kagithapallidhilleswararao@gmail.com",
  "saiandkumar11@gmail.com"
];

window.startAuthentication = function () {

  onAuthStateChanged(auth, (user) => {

    if (user) {

      if (allowedUsers.includes(user.email)) {

        // Hide authentication screen
        document.getElementById("authScreen").style.display = "none";

        // Show website
        document.getElementById("website").style.display = "block";

      } else {

        alert("❤️ This surprise is only for someone special.");

        signOut(auth);

      }

    }

  });

};

window.login = function () {

  signInWithPopup(auth, provider)
    .catch((err) => {

      alert(err.message);

    });

};
