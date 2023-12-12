console.log('sound');

$(document).ready(function() {
  var audioContextResumed = false;

  // Обработчик для кнопки "Enter"
  $('#enterButton').click(function() {
    // Включаем автопрокрутку
    $('body').removeClass('scroll-lock');

    // Восстанавливаем контекст аудио
    if (!audioContextResumed) {
      Tone.context.resume().then(() => {
        console.log('Audio context resumed successfully');
        audioContextResumed = true;
        playMusic(); // Запускаем воспроизведение музыки
      }).catch((err) => {
        console.error('Error when trying to resume audio context:', err);
      });
    } else {
      playMusic(); // Запускаем воспроизведение музыки
    }
  });

  function playMusic() {
    var buffer = new Tone.Buffer("WTFW.mp3", function(){
      console.log('buffer')

      var meter = new Tone.Meter();

      var player = new Tone.Player({
        "url" : buffer.get()
      }).connect(meter).toMaster();

      const button = $('#button');
      const enter = $('#enter');

      enter.fadeIn();

      enter.click(function() {
        $('body').removeClass('scroll-lock');
        $('.container').fadeIn();
        player.start();
        enter.fadeOut();
        button.attr('checked', true);
      });

      button.change(function(){
        if(player.state === 'started') {
          if(player.mute) {
            player.mute = false;
            button.attr('checked', false);
          } else {
            player.mute = true;
            $(this).attr('checked', true);
          }
        } else if (player.state === 'stopped') {
          player.start();
          enter.fadeOut();
          button.attr('checked', true);
        }
      });

      function opacityLevel(){
        var level = meter.getLevel();
        level = Tone.dbToGain(level); //scale it between 0 - 1
        opacity = 1-(Math.round(level * 175) / 100);
        if (opacity < 0.25) {
          $('#main').css('opacity', 0.25);
        } else {
          $('#main').css('opacity', opacity);
        }
      }

      function loop(){
        requestAnimationFrame(loop);
        opacityLevel();
      }
      loop();
    });
  }
});
