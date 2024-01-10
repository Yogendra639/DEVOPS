function validateForm() {
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    // Simple validation for demonstration purposes
    if (username === '' || email === '' || password === '' || confirmPassword === '') {
        alert('All fields must be filled out');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    // You can add further validation or send the data to a server here
    alert('Registration successful!\nUsername: ' + username + '\nEmail: ' + email);
}
