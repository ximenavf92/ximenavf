// Back to Top Button
let backToTopBtn = document.getElementById('backToTop');
let root = document.documentElement;
let target = document.querySelector('.main-footer');
let susmena = document.querySelector('.susmena');

function handleScroll() {
    let scrollTotal = root.scrollHeight - root.clientHeight;
        if ((root.scrollTop / scrollTotal) > 0) {
        backToTopBtn.classList.add('show-btn');
    } else {
        backToTopBtn.classList.remove('show-btn');
    }
}

function scrollToTop() {
    root.scrollTo({
        top: 0,
        behavior: "smooth"
    })}


function callback(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            susmena.classList.add('be-sus');
        } else {
            susmena.classList.remove('be-sus');
        }
    });
}

backToTopBtn.addEventListener('click', scrollToTop);
document.addEventListener('scroll', handleScroll);

// intersection observer to show back to top button
let observer = new IntersectionObserver(callback);
observer.observe(target);