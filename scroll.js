console.log('scroll');

var shouldScroll = false;
var gifAnimation;

function scroll() {
  if (!shouldScroll) {
    return;
  }

  var scrollDelta = 1;

  gifAnimation = gsap.to('#hidden-gif', {
    y: `+=${scrollDelta}`,
    ease: 'none',
    repeat: -1,
    paused: true  
  });

  gifAnimation.play(); 

  setTimeout(scroll, 80);
}

$('#enter').click(function() {
  shouldScroll = !shouldScroll;
  scroll();
});

$('.playpause').click(function() {
  shouldScroll = !shouldScroll;
  if (shouldScroll) {
    gifAnimation.play(); 
  } else {
    gifAnimation.pause();
  }
});
