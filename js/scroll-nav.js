$(window).bind('scroll', function () {
    if ($(window).scrollTop() > 50) {
        $('.fixed-banner').addClass('scroll-nav');
    } else {
        $('.fixed-banner').removeClass('scroll-nav');
    }
});