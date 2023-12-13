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

 
  $(window).on('scroll', function () {
    if (shouldScroll) {
      
      gifAnimation.progress(window.scrollY / ($(document).height() - $(window).height()));
    }
  });

  setTimeout(scroll, 80);
}

$('#enter').click(function() {
  shouldScroll = !shouldScroll;
  scroll();
});

$('.playpause').click(function() {
  shouldScroll = !shouldScroll;
});
