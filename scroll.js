console.log('scroll');

var shouldScroll = false;
var gifAnimation;

function initGifAnimation() {
  var scrollDelta = 1;
  gifAnimation = gsap.to('#hidden-gif', {
    y: `+=${scrollDelta}`,
    ease: 'none',
    repeat: -1,
    paused: true,
  });
}

function handleScroll() {
  if (shouldScroll) {
    gifAnimation.progress(window.scrollY / ($(document).height() - $(window).height()));
  }
}

$(document).ready(function () {
  initGifAnimation();

  $('#enterButton, .playpause').click(function () {
    shouldScroll = !shouldScroll;
    if (shouldScroll) {
      handleScroll();
    } else {
      gifAnimation.pause();
    }
  });

  $(window).on('scroll', handleScroll);
});
