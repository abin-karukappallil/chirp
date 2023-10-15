import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
import { getFirestore, addDoc, ref, doc, orderBy, collection, getDocs, query } from 'https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js';

const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const username = prompt("Enter your username");
function sendMessage(e) {
    document.getElementById("send-button").onClick = async function (e) {
        e.preventDefault();
        const timestamp = serverTime();
        const messageInput = document.getElementById("msg-input");
        const message = messageInput.value;
        messageInput.value = "";

        db.ref("messages/" + timestamp).set({
            username,
            message,
        });
    }
}
const fetchChat = db.ref("messages/");
fetchChat.on("child_added", function (snapshot) {
    const messages = snapshot.val();
    const message = `<div class="msg-container">
        <svg xmlns="http://www.w3.org/2000/svg" width="112" height="78" viewBox="0 0 112 78" fill="none">
            <path d="M111.046 0.452592L30.6101 77.0124L4.43454e-07 0.107176L111.046 0.452592Z" fill="white"/>
            </svg>
    <p class="usr">${username === messages.username ? "sent" : "receive"
        }></p>
    <p class="msg"><span>${messages.username}: </span>${messages.message}</p>
 </div>`;
    document.getElementById("msg-conatiner").innerHTML += message;
})