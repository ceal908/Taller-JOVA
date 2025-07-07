// frontend/login.js
//fetch('http://localhost:3000/api/login')
document.getElementById('loginForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;

    const res = await fetch('http://localhost:3000/api/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
    });

    const data = await res.json();

    if (res.ok) {
        
        window.location.href = 'dashboard.html';
    } else {
        document.getElementById('errorMsg').innerText = data.message || 'Usuario o contraseña incorrectos.';
    }
});
