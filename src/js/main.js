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

let TxtRotate = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtRotate.prototype.tick = function () {
    let i = this.loopNum % this.toRotate.length;
    let fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    let that = this;
    let delta = 300 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function () {
        that.tick();
    }, delta);
};

window.onload = function () {
    let elements = document.getElementsByClassName('txt-rotate');
    for (let i = 0; i < elements.length; i++) {
        let toRotate = elements[i].getAttribute('data-rotate');
        let period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtRotate(elements[i], JSON.parse(toRotate), period);
        }
    }
    let css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #810d0d }";
    document.body.appendChild(css);
};