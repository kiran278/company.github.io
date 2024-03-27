var button = document.querySelector('.button');
var mobileNav = document.querySelector('.mobile_nav-bar');
var crossButton = document.querySelector('.button-toggle');
var backdrop = document.querySelector(' .backdrop');

button.addEventListener('click', function() {
    mobileNav.style.display = 'block';
    button.style.display = 'none';
    crossButton.style.display = 'block';
    backdrop.style.display = 'block';
}) ;

crossButton.addEventListener('click', function() {
    mobileNav.style.display = 'none';
    crossButton.style.display = 'none';
    button.style.display = 'block';
});