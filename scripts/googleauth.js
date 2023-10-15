import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";

import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const ggIn = document.getElementById("ggin");

    ggIn.addEventListener("click", (e) => {
        e.preventDefault();

        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user
                console.log(user);
                window.location.href= "chat.html";
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message
            })
    });
