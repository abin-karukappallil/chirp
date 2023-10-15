const auth = firebase.auth();
const loginBtn = document.querySelector("#loginbtn");
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;

  auth
    .signInWithEmailAndPassword(email, password)
    .then((cred) => {
      alert("Logged in user!");
      window.location.href = "chat.html";
    })
    .catch((error) => {
      alert(error.message);
    });
});