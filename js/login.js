// log in function
document.getElementById('sign-in').addEventListener('click', function (event) {
    event.preventDefault();
    const inputId = document.getElementById('input-id').value;
    const inputPassword = document.getElementById('input-pass').value;

    if (inputId === 'admin' && inputPassword === 'admin123') {
        alert('Welcome');
        window.location.href = 'home.html';
    }
    else {
        alert('Invalid Information');
    }
})