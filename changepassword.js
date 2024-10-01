// document.getElementById('change-password-form').addEventListener('submit', function(event) {
//     const newPassword = document.getElementById('new-password').value;
//     const confirmPassword = document.getElementById('confirm-password').value;
//     const errorMessage = document.getElementById('error-message');
    
//     // Clear any previous error messages
//     errorMessage.textContent = '';
    
//     if (newPassword !== confirmPassword) {
//         event.preventDefault(); // Stop the form from submitting
//         errorMessage.textContent = 'New password and confirmation do not match!';
//     }
// });

document.getElementById('change-password-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from submitting

    // Get the password fields
    const currentPassword = document.getElementById('current-password').value;
    const newPassword = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    const errorMessage = document.getElementById('error-message');

    // Clear any previous error message
    errorMessage.textContent = '';

    // Validate passwords
    if (currentPassword === newPassword) {
        errorMessage.textContent = 'New password cannot be the same as the current password!';
        return;
    }

    if (newPassword !== confirmPassword) {
        errorMessage.textContent = 'New password and confirm password do not match!';
        return;
    }

    // If all validation passes, submit the form (you can replace this with actual form submission code)
    alert('Password successfully changed!');
    // Submit the form or perform further actions here.
});
