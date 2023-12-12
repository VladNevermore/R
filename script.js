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

// Добавленный код для отображения гифки и воспроизведения звука
window.addEventListener('scroll', function() {
  var endSection = document.getElementById('endSection');
  var gifContainer = document.getElementById('gif-container');
  var audio = document.getElementById('audio');

  var endSectionBottom = endSection.getBoundingClientRect().bottom;
  var windowBottom = window.innerHeight;

  if (endSectionBottom <= windowBottom) {
    gifContainer.style.opacity = 1;
    audio.play();

    // Добавьте ваш код анимации или других действий после того, как пользователь видит гифку и слышит звук
  }
});
