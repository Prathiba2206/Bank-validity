function validateRegistrationForm() {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    let errorMessage = '';

    if (username === '') {
        errorMessage = 'Username is required.';
    } else if (email === '') {
        errorMessage = 'Email is required.';
    } else if (password.length < 8) {
        errorMessage = 'Password must be at least 8 characters long.';
    } else if (password !== confirmPassword) {
        errorMessage = 'Passwords do not match.';
    }

    if (errorMessage) {
        showModal(errorMessage);
        return false;
    }

    alert("Registration successful!");
    return true;
}

function validateLoginForm() {
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    let errorMessage = '';

    if (username === '') {
        errorMessage = 'Username is required.';
    } else if (password === '') {
        errorMessage = 'Password is required.';
    }

    if (errorMessage) {
        showModal(errorMessage);
        return false;
    }

    alert("Login successful!");
    return true;
}

function showModal(message) {
    const modal = document.getElementById('validationModal');
    const modalMessage = document.getElementById('modalMessage');
    modalMessage.textContent = message;
    modal.style.display = 'flex';
}

function closeModal() {
    const modal = document.getElementById('validationModal');
    modal.style.display = 'none';
}

// Close the modal if the user clicks outside of it
window.onclick = function(event) {
    const modal = document.getElementById('validationModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}
