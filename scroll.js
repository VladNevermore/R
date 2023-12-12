console.log('scroll');

var shouldScroll = false;

function scroll() {
  if (!shouldScroll) {
    return;
  }
  window.scrollBy(0, 1);
  setTimeout(scroll, 80);
}

$('#enter').click(function() {
  shouldScroll = !shouldScroll;
  scroll();
})

$('.playpause').click(function() {
  shouldScroll = !shouldScroll;
  scroll();
});