$('img').attr('draggable', false);

$('body')[0].onmousemove = (function() {
    var onmousestop = function() {
        $('.container').addClass('transparent');
    }, thread;

    return function() {
        $('.container').removeClass('transparent');
        clearTimeout(thread);
        thread = setTimeout(onmousestop, 3000);
    };
})();

var gifContainer = document.getElementById('gif-container');
var audio = document.getElementById('audio');

window.addEventListener('scroll', function() {
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

window.onclick = function(event) {
    var modal = document.getElementById("myModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};
