document.getElementById('register-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in 
            console.log(userCredential)
            var user = userCredential.user;
            // Update the user's profile
            // user.updateProfile({
            //     displayName: name
            // }).then(() => {
            //     // Redirect to the login page or home page
            //     window.location.href = 'login.html';
            // }).catch((error) => {
            //     console.error("Error updating profile:", error);
            // });
        })
        .catch((error) => {
            console.error("Error registering user:", error);
        });
});
