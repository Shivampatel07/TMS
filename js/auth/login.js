// login.js
import { auth } from './firebase'
document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            // Redirect to the home page or dashboard
            window.location.href = 'index.html';
        })
        .catch((error) => {
            console.error("Error logging in:", error);
        });
});
