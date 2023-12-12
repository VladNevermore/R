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