$('#emailMe').click(function() {
    $(location).attr('href', 'mailto:annelee3322@gmail.com')
});

$('#emailAnne').click(function() {
    $(location).attr('href', 'mailto:vianne.leee@gmail.com')
});

$('#github').click(function () {
    window.open('https://github.com/vian-ai');
});

$('#linkedIn').click(function () {
    window.open('https://www.linkedin.com/in/vianneyledesma/');
});

$('.ham-menu').click(function () {
    $('.ham-menu').toggleClass("active");
    $('.nav-menu').toggleClass("active");
});