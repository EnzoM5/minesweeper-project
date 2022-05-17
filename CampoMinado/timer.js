function timer() {
  var segundos = 0;
  var cronometro = setInterval(function() {
    document.querySelector('#timer-jogo').innerHTML= '00:00' + segundos;
    sec++;
    if (sec < 0) {
      clearInterval(cronometro);
    }
  }, 1000);
}