const auth = firebase.auth();
const signupBtn = document.querySelector("#signupbtn");
signupBtn.addEventListener("click", (e) => {
  e.preventDefault();

  //Selecting input

  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;

  //create user firebase method

  auth.createUserWithEmailAndPassword(email, password).then((cred) => {
    alert("User signed up user account created!");
    window.location.href = "signin.html";
  });
});