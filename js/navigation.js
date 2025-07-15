// Shared navigation functionality
function toggleMobileMenu() {
    const mobileNav = document.getElementById('mobileNav');
    const menuToggle = document.querySelector('.menu-toggle');
    
    mobileNav.classList.toggle('active');
    menuToggle.classList.toggle('active');
    
    if (mobileNav.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

function toggleMobileDropdown(button) {
    const dropdown = button.nextElementSibling;
    const isActive = dropdown.classList.contains('active');
    
    document.querySelectorAll('.mobile-dropdown').forEach(dropdown => {
        dropdown.classList.remove('active');
    });
    
    if (!isActive) {
        dropdown.classList.add('active');
    }
}

// Initialize navigation
document.addEventListener('DOMContentLoaded', function() {
    // Close mobile menu when clicking on links
    document.querySelectorAll('.mobile-nav a').forEach(link => {
        link.addEventListener('click', () => {
            toggleMobileMenu();
        });
    });

    // Close mobile menu when resizing to desktop
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            const mobileNav = document.getElementById('mobileNav');
            const menuToggle = document.querySelector('.menu-toggle');
            
            mobileNav.classList.remove('active');
            menuToggle.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});