console.log('scroll');
var shouldScroll = false;
var gifAnimation;

function scroll() {
  var scrollDelta = 1;
  gifAnimation = gsap.to('#hidden-gif', {
    y: `+=${scrollDelta}`,
    ease: 'none',
    repeat: -1,
    paused: true,
  });

  $(window).on('scroll', function () {
    if (shouldScroll) {
      gifAnimation.progress(window.scrollY / ($(document).height() - $(window).height()));
    }
  });
}

$('#enterButton').click(function () {
  shouldScroll = !shouldScroll;
  if (shouldScroll) {
    scroll();
  } else {
    gifAnimation.pause(); 
  }
});

$('.playpause').click(function () {
  shouldScroll = !shouldScroll;
  if (shouldScroll) {
    scroll();
  } else {
    gifAnimation.pause(); 
  }
});
