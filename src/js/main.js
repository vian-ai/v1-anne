function hyperLinks() {
    $('#emailMe').click(function () {
        $(location).attr('href', 'mailto:annelee3322@gmail.com')
    });

    $('#email-icon').click(function () {
        $(location).attr('href', 'mailto:vianne.leee@gmail.com')
    });

    $('#github-icon').click(function () {
        window.open('https://github.com/vian-ai');
    });

    $('#github-p1').click(function () {
        window.open('');
    });

    $('#github-p2').click(function () {
        window.open('');
    });

    $('#github-p3').click(function () {
        window.open('');
    });

    $('#p1-link').click(function () {
        window.open('');
    });

    $('#p2-link').click(function () {
        window.open('');
    });

    $('#p3-link').click(function () {
        window.open('');
    });

    $('#linkedIn-icon').click(function () {
        window.open('https://www.linkedin.com/in/vianneyledesma/');
    });
}
hyperLinks();

function reveal() {
    let reveals = document.querySelectorAll(".reveal");

    for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = reveals[i].getBoundingClientRect().top;
        let elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}
window.addEventListener("scroll", reveal);

function onScroll() {
    let prevScroll = window.pageYOffset;
    window.onscroll = function () {
        let currentScroll = window.pageYOffset;
        if (prevScroll > currentScroll) {
            document.getElementById("nav-bar").style.top = "0";
        } else {
            document.getElementById("nav-bar").style.top = "-80px";
        }
        prevScroll = currentScroll;
    }
}
onScroll();

function hamMenu() {
    const hamburger = document.querySelector('.nav-container');
    const navMenu = document.querySelector('.nav-menu');
    const blurContent = document.querySelector('.blurContent');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        blurContent.classList.toggle('blur-content');
    });

    document.querySelectorAll('.nav-link').forEach(n =>
        n.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            blurContent.classList.remove('blur-content');
        }));
}
hamMenu();