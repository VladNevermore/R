$(document).ready(function () {
    $('img').attr('draggable', false);

    let initialTouches = [];
    let currentScale = 1;
    let currentTranslate = { x: 0, y: 0 };

    const imageContainer = $('.image-container');
    const modal = $("#myModal");
    const modalImg = $("#modalImg");

    imageContainer.on('touchstart', function (e) {
        initialTouches = e.originalEvent.touches;
    });

    imageContainer.on('touchmove', function (e) {
        const currentTouches = e.originalEvent.touches;

        if (initialTouches.length === 2 && currentTouches.length === 2) {
            const deltaX = currentTouches[1].clientX - currentTouches[0].clientX;
            const deltaY = currentTouches[1].clientY - currentTouches[0].clientY;
            const initialDistance = Math.sqrt(deltaX ** 2 + deltaY ** 2);

            const newDeltaX = initialTouches[1].clientX - initialTouches[0].clientX;
            const newDeltaY = initialTouches[1].clientY - initialTouches[0].clientY;
            const newDistance = Math.sqrt(newDeltaX ** 2 + newDeltaY ** 2);

            const scaleChange = newDistance / initialDistance;
            currentScale *= scaleChange;

            imageContainer.find('img').css({
                'transform': `scale(${currentScale}) translate(${currentTranslate.x}px, ${currentTranslate.y}px)`
            });
        }

        initialTouches = currentTouches;
    });

    imageContainer.on('touchend', function () {
        initialTouches = [];
    });

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

    imageContainer.find('img').on('click', function () {
        modal.css('display', 'block');
        modalImg.attr('src', $(this).attr('src'));
    });

    $('#myModal .close').on('click', function () {
        modal.css('display', 'none');
    });

    $(window).on('click', function (event) {
        if (event.target === modal[0]) {
            modal.css('display', 'none');
        }
    });
});
