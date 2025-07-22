<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <title>Maison Valca</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    html, body { width: 100%; height: 100%; overflow: hidden; background: black; }
    .scene { display: none; width: 100%; height: 100%; position: absolute; top: 0; left: 0; }
    .scene.visible { display: block; }
    video { width: 100%; height: 100%; object-fit: cover; }
    .dot { position: absolute; width: 30px; height: 30px; background: red; border-radius: 50%; cursor: pointer; z-index: 10; }
    #popup, #popup2, #popup3 {
      position: absolute; top: 10%; left: 10%; width: 80%; height: 80%;
      background: rgba(0, 0, 0, 0.9); display: none;
      z-index: 20; justify-content: center; align-items: center; flex-direction: column;
    }
    .close-btn {
      position: absolute; top: 10px; right: 20px;
      font-size: 24px; color: white; cursor: pointer; z-index: 999;
    }
  </style>
</head>
<body>

  <!-- SCENE 1 -->
  <div id="scene1" class="scene visible">
    <video id="v1" src="https://cdn.glitch.global/469310d9-313a-4565-ada7-0e04a674cf0f/1.mp4?v=1745232695114" autoplay muted loop></video>
    <div onclick="showScene(2)" style="position: absolute; bottom: 20px; left: 50%; transform: translateX(-50%); color: white; background: rgba(0,0,0,0.6); padding: 10px 20px; cursor: pointer;">Entrer</div>
  </div>

  <!-- SCENE 2 -->
  <div id="scene2" class="scene">
    <video id="v2" src="https://cdn.glitch.global/469310d9-313a-4565-ada7-0e04a674cf0f/2.mp4?v=1745232696697" autoplay muted loop></video>
    <div onclick="showScene(3)" style="position: absolute; bottom: 20px; left: 50%; transform: translateX(-50%); color: white; background: rgba(0,0,0,0.6); padding: 10px 20px; cursor: pointer;">Monter</div>
  </div>

  <!-- SCENE 3 -->
  <div id="scene3" class="scene">
    <video id="v3" src="https://cdn.glitch.global/469310d9-313a-4565-ada7-0e04a674cf0f/3.mp4?v=1745232693196" autoplay muted loop></video>
    <div id="obj1" class="dot" style="top: 68%; left: 66%;" onclick="showPopup('home.mp4', 'https://cdn.glitch.me/469310d9-313a-4565-ada7-0e04a674cf0f/home.wav?v=1745232711989')"></div>
    <div id="obj2" class="dot" style="top: 50%; left: 30%;" onclick="showPopup('songdo.mp4', 'https://cdn.glitch.me/469310d9-313a-4565-ada7-0e04a674cf0f/Song%20Do%20(Valca)_Mix%20V2.wav?v=1745232736747')"></div>
    <div id="obj3" class="dot" style="top: 58%; left: 56%;" onclick="showPopup('home.mp4', 'https://cdn.glitch.me/469310d9-313a-4565-ada7-0e04a674cf0f/windy.wav?v=1745232754368')"></div>
  </div>

  <!-- POPUP -->
  <div id="popup">
    <div class="close-btn" onclick="hidePopup()">✕</div>
    <video id="popupVideo" muted loop playsinline style="max-height: 50vh; margin-bottom: 20px; display: block;">
      <source id="popupVideoSrc" src="" type="video/mp4">
    </video>
  </div>

  <script>
    let currentAudio = null;
    let hallSound = new Audio("https://cdn.glitch.global/469310d9-313a-4565-ada7-0e04a674cf0f/sonhall.mp3?v=1745232741197");
    let ambientMaison = new Audio("https://cdn.glitch.me/469310d9-313a-4565-ada7-0e04a674cf0f/windy.wav?v=1745232754368");
    let ambientGrenier = new Audio("https://cdn.glitch.global/469310d9-313a-4565-ada7-0e04a674cf0f/documentary_loop_audio.mp3?v=1745232697052");
    ambientMaison.loop = true;
    ambientMaison.volume = 0.3;
    ambientGrenier.loop = true;
    ambientGrenier.volume = 0.3;

    function showScene(scene) {
      for (let i = 1; i <= 3; i++) {
        document.getElementById("scene" + i).classList.remove("visible");
        document.getElementById("v" + i).pause();
        if (i === 2) { hallSound.pause(); hallSound.currentTime = 0;