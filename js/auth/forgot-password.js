// forgot-password.js
import { auth } from "./firebase";
document.getElementById('forgot-password-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;

    auth.sendPasswordResetEmail(email)
        .then(() => {
            alert('Password reset email sent!');
        })
        .catch((error) => {
            console.error("Error sending password reset email:", error);
        });
});
