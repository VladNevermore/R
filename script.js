$(document).ready(function () {
    $('img').attr('draggable', false);

    $('body')[0].onmousemove = (function () {
        var onmousestop = function () {
            $('.container').addClass('transparent');
        }, thread;

        return function () {
            $('.container').removeClass('transparent');
            clearTimeout(thread);
            thread = setTimeout(onmousestop, 3000);
        };
    })();

    const gifContainer = $('#gif-container');
    const audio = $('#audio')[0];

    $(window).on('scroll', function () {
        const endSection = $('#endSection');
        const endSectionBottom = endSection.offset().top + endSection.height();
        const windowBottom = $(window).scrollTop() + $(window).height();

        if (endSectionBottom <= windowBottom) {
            gifContainer.css('opacity', 1);
            audio.play();
        } else {
            gifContainer.css('opacity', 0);
            audio.pause();
            audio.currentTime = 0;
        }
    });
});
