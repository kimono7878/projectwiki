document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Fake login check
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username && password) {
        document.getElementById('login-section').style.display = 'none';
        document.getElementById('content-section').style.display = 'block';
        // Smooth scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
        // Highlight Home link on login
        document.querySelector('.nav-links a[href="#home"]').classList.add('active');
    } else {
        alert('Please enter username and password');
    }
});

// Navigation link highlighting
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function() {
        // Remove active class from all links
        document.querySelectorAll('.nav-links a').forEach(l => l.classList.remove('active'));
        // Add active class to clicked link
        this.classList.add('active');
    });
});