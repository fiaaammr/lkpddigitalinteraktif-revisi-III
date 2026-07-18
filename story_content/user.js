function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6F4Yw9jwGsN":
        Script1();
        break;
      case "6HrJXy1amGt":
        Script2();
        break;
      case "6poOQ5QTY3e":
        Script3();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSong');

audio.src = "1.mp3";
audio.load();
audio.play();
audio.volume = 0.4;
}

function Script2()
{
  var audio = document.getElementById('bgSong');

var checkVideo = setInterval(function () {

    var video = document.querySelector('video');

    if (!video || !audio) return;

    // Jika video sudah sedang berjalan, langsung pause backsound
    if (!video.paused) {
        audio.pause();
    }

    video.onplay = function () {
        audio.pause();
    };

    video.onpause = function () {
        if (!video.ended) {
            audio.play();
        }
    };

    video.onended = function () {
        audio.play();
    };

    clearInterval(checkVideo);

}, 200);
}

function Script3()
{
  var audio = document.getElementById('bgSong');

if(audio){
    audio.play();
}
}

