$(document).ready(function () {
    $('img').attr('draggable', false);

    let initialTouches = [];
    let currentScale = 1;
    let currentTranslate = { x: 0, y: 0 };

    $('.image-container').on('touchstart', function (e) {
        initialTouches = e.originalEvent.touches;
    });

    $('.image-container').on('touchmove', function (e) {
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

            $(this).find('img').css({
                'transform': `scale(${currentScale}) translate(${currentTranslate.x}px, ${currentTranslate.y}px)`
            });
        }

        initialTouches = currentTouches;
    });

    $('.image-container').on('touchend', function () {
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

    var gifContainer = document.getElementById('gif-container');
    var audio = document.getElementById('audio');

    window.addEventListener('scroll', function () {
        var endSection = document.getElementById('endSection');
        var endSectionBottom = endSection.getBoundingClientRect().bottom;
        var windowBottom = window.innerHeight;

        if (endSectionBottom <= windowBottom) {
            gifContainer.style.opacity = 1;
            audio.play();
        } else {
            gifContainer.style.opacity = 0;
            audio.pause();
            audio.currentTime = 0;
        }
    });

    function openImage() {
        var modal = document.getElementById("myModal");
        var img = document.getElementById("myImage");
        var modalImg = document.getElementById("modalImg");

        modal.style.display = "block";
        modalImg.src = img.src;
    }

    function closeImage() {
        document.getElementById("myModal").style.display = "none";
    }

    window.onclick = function (event) {
        var modal = document.getElementById("myModal");
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
});
