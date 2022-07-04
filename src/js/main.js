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

function hamMenu() {
    $('.ham-menu').click(function () {
        $('.ham-menu').toggleClass("active");
        $('.nav-menu').toggleClass("active");
    });
}
hamMenu();