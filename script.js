const hamburgerMenu = document.getElementById('hamburger-menu');
const navbar = document.querySelector('.navbar');
const navbarNav = document.querySelector('.navbar-nav');

// fungsi untuk menampilkan side bar melalui hamburger menu
hamburgerMenu.addEventListener('click', function() {
    navbarNav.classList.toggle('active');
    navbar.classList.toggle('active');
});

// Fungsi untuk menutup sidebar jika user mengklik di luar area sidebar
document.addEventListener('click', function(event) {
    const isClickInside = navbar.contains(event.target);

    if (!isClickInside && navbar.classList.contains('active')) {
        navbarNav.classList.remove('active');
        navbar.classList.remove('active');
    }
});
