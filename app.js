document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in 
            var user = userCredential.user;
            console.log('User signed in: ', user);
            // Navigate to home page
            window.location.href = 'home.html';
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.error('Error signing in: ', errorCode, errorMessage);
            // Show error message to the user
            alert('Error signing in: ' + errorMessage);
        });
});
