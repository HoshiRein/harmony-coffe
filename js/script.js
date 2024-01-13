// Toggle class active hamburger-menu
const navbarNav = document.querySelector('.navbar-nav');

// If hamburger-menu clicked
document.querySelector('#hamburger-menu'). onclick = () => {
    navbarNav.classList.toggle('active');
};

// Toggle class active search-button
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

// If search-button clicked
document.querySelector('#search-button'). onclick = (e) => {
    searchForm.classList.toggle('active');
    searchBox.focus();
    e.preventDefault();
}

// Toggle class active shopping-cart-button
const shoppingCart = document.querySelector('.shopping-cart')

// If shopping-cart-button clicked
document.querySelector('#shopping-cart-button'). onclick = (e) => {
    shoppingCart.classList.toggle('active');
    e.preventDefault();
}

// Click outside element
const hm = document.querySelector('#hamburger-menu');
const sb = document.querySelector('#search-button');
const sc = document.querySelector('#shopping-cart-button');

document.addEventListener('click', function(e){
    if(!hm.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
    if(!sb.contains(e.target) && !searchForm.contains(e.target)) {
        searchForm.classList.remove('active');
    }
    if(!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
        shoppingCart.classList.remove('active');
    }
});


// Modal box
const itemDetailModal = document.querySelector('#item-detail-modal');
const itemDetailButtons = document.querySelectorAll('.item-detail-button');

itemDetailButtons.forEach((btn) => {
    btn.onclick = (e) => {
        itemDetailModal.style.display = 'flex';
        e.preventDefault();
    }
});


// Close button clicked
document.querySelector('.modal .close-icon').onclick = (e) => {
    itemDetailModal.style.display = 'none';
    e.preventDefault();
};

// Clicked outside modal
window.onclick = (e) => {
    if (e.target === itemDetailModal) {
        itemDetailModal.style.display = 'none'; 
    }
};