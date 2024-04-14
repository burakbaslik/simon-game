const config = {
    faviconIcon: "https://cdn.discordapp.com/attachments/1019704269651320843/1212387624484872243/favicon.ico?ex=65f1a6f6&is=65df31f6&hm=028baa499a0b51ff309a49d697ee49bfc5b7571b7da343406ab8aee6cfb258eb&",
    winSound : "https://cdn.discordapp.com/attachments/1019704269651320843/1212387967558221854/win.mp3?ex=65f1a748&is=65df3248&hm=b060460aba2ff249d5e96c9a7f6edf1da2c073c531eccff28bb5be926efa8b86&",
    loseSound : "https://cdn.discordapp.com/attachments/1019704269651320843/1212387966849261649/lose.mp3?ex=65f1a748&is=65df3248&hm=442da809c9368db60b8e8910c699d16c2dcda8615e908720ea39a47029a6f5fe&",
    levelUpSound : "https://cdn.discordapp.com/attachments/1019704269651320843/1212387966421307442/LevepUp.mp3?ex=65f1a748&is=65df3248&hm=5298e7d2a8105686881345ba100ca1dd32e7341d9792dd3282771fa5d39a5024&",
    greenSound : "https://cdn.discordapp.com/attachments/1019704269651320843/1212387966056534016/green.mp3?ex=65f1a748&is=65df3248&hm=2890efcff3f5602b4e89f93b9613332f0395ef2383c2c398d9f092a1ab476185&",
    yellowSound : "https://cdn.discordapp.com/attachments/1019704269651320843/1212387968367591454/yellow.mp3?ex=65f1a748&is=65df3248&hm=ebfddf6cc5d66048ea907df00452f0d254c42a19164b598649d95881dbe7a427&",
    blueSound : "https://cdn.discordapp.com/attachments/1019704269651320843/1212387965289111564/blue.mp3?ex=65f1a748&is=65df3248&hm=492bc67081c296ebc896c055951d963065d9d69892027b82b13a7a02b21aafea&",
    redSound : "https://cdn.discordapp.com/attachments/1019704269651320843/1212387967264366603/red.mp3?ex=65f1a748&is=65df3248&hm=d6a64f710a908b099b1bf4bf4be3a1a3b6a8cd002412184cd45a18dfc3b3851f&",
    wrongSound : "https://cdn.discordapp.com/attachments/1019704269651320843/1212387967868604416/wrong.mp3?ex=65f1a748&is=65df3248&hm=9b5eb794df6e2456cebc4d07be9dedc84981b8b828ea46ba6fd3243c4a909927&",
    countdownSound : "https://cdn.discordapp.com/attachments/1019704269651320843/1212387965649551410/geriSaym.mp3?ex=65f1a748&is=65df3248&hm=1d267409357d59c385962c0b609e0c459726c835b9d870d9146643187ba1f340&",
  };
  
  const html = document.createElement("div");
  html.innerHTML = `<audio id="myAudio" src=${config.countdownSound}></audio>
  <h1 id="finish-game"></h1>
    <h1 id="win-game"></h1>
      <div id="mainContainer">
      <div class="text-container">
          <h1 class="game-heart" class="not-copy">
              <h1 class="heart" id="heart-1"></h1>
              <h1 class="heart" id="heart-2"></h1>
              <h1 class="heart" id="heart-3"></h1>
          </h1>
          <h1 id="level-title" class="not-copy">Press any button to start  </h1>
          <div class="pointandsecond">
          <h1 id="level-point" class="not-copy"></h1>
          <h1 class="second-time" class="not-copy">  </h1>
          </div>      
      </div>
    
    <div class="container">
      <div class="row">
        <div type="button" id="green" class="btn"></div>
        <div type="button" id="red" class="btn"></div>
      </div>
     
      <div class="row">
        <div type="button" id="yellow" class="btn"></div>
        <div type="button" id="blue" class="btn"></div>
      </div>
      <div class="start-button"> START </div>
    </div>
  </div>`;
  document.body.append(html);
  
  const style = document.createElement("style");
  style.innerHTML = `
    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(270deg);
      }
    }
  
    @media only screen and (max-width: 1000px) {
      body{
        background-color: red;
      }
      .text-container {
        margin-top: 50%;
      }
      .start-button{
        left: -2% !important;
        margin-top: 15px;
        display: inline-block;
      }
      #level-title{
        font-size: 2rem !important;
        padding-right: 1% !important;
      }
      #level-point{
        font-size: 2rem !important;
      }
  
    }
  
    .not-copy{
      -webkit-touch-callout: none; 
      -webkit-user-select: none; 
      -khtml-user-select: none; 
      -moz-user-select: none; 
      -ms-user-select: none; 
      user-select: none; 
    }
  
    body {
      text-align: center;
      background-color: #011F3F;
    }
  
    #level-title {
      font-family: 'Press Start 2P', cursive;
      font-size: 3rem;
      margin: auto;
      color: #FEF2BF;
      display: inline;
      padding-right: 6%;
      z-index: 999999999;
      margin-top: 23px;
    }
  
    #level-point {
      font-family: 'Press Start 2P', cursive;
      font-size: 3rem;
      color: #FEF2BF;
      display: inline;
      margin-right: 20px;
    }
  
    .game-heart {
      font-size: 40px;
      margin-left: 20px;
    }
  
    #finish-game {
      color: rgb(244, 25, 25);
      font-size: 60px;
      position: absolute;
      top: 33%;
      left: 48%;
      transform: translate(-50%, -50%);
    }
  
    #win-game {
      color: rgb(244, 25, 25);
      font-size: 200px;
      position: absolute;
      top: 33%;
      left: 48%;
      transform: translate(-50%, -50%);
    }
  
    .text-container {
      display: flex; 
    }
  
    .heart {
      opacity: 1;
    }
  
    .heart.hide {
      opacity: 0;
      transition: opacity 1s ease-in-out;
      animation: spin 2s linear infinite;
    }
  
    .container {
      display: block;
      width: 50%;
      margin-top: 20px;
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  
    .btn {
      margin: 25px;
      display: inline-block;
      height: 200px;
      width: 200px;
      border: 10px solid black;
      border-radius: 20%;
      cursor: pointer;
    }
  
    .game-over {
      background-color: red;
      opacity: 0.8;
    }
  
    .row{
      display: flex;
    }
  
    #red {
      background-color: red;
    }
  
    #green {
      background-color: green;
    }
  
    #blue {
      background-color: blue;
    }
  
    #yellow {
      background-color: yellow;
    }
  
    .pressed {
      box-shadow: 0 0 20px white;
      background-color: grey;
    }
  
    .second-time {
      margin-top: 60px;
      color: aliceblue;
      font-size: 20px;
      font-family: 'Press Start 2P', cursive;
      font-size: 3rem;
    }
  
    .start-button {
      color: whitesmoke;
      position: relative;
      top: 50%;
      left: -15%;
      padding: 8px;
      border: 4px solid whitesmoke;
      border-radius: 10%;
      display: inline-block;
      font-family: 'Press Start 2P', cursive;
      font-size: 20px;
      cursor: pointer;
    }
  
    .pointandsecond{
      margin-top: 20px;
    }
  `;
  document.head.append(style);
  
  const scriptAttribute = document.createElement("script");
  scriptAttribute.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js";
  document.body.appendChild(scriptAttribute);
  
  const title = document.createElement("title");
  title.innerHTML = "Simon";
  document.head.append(title);
  
  const linkElement = document.createElement('link');
  linkElement.rel = 'stylesheet';
  linkElement.type = 'text/css';
  linkElement.href = 'https://fonts.googleapis.com/css?family=Press+Start+2P';
  document.head.appendChild(linkElement);
  
  const linkElement2 = document.createElement('link');
  linkElement2.rel = 'icon';
  linkElement2.href = config.faviconIcon;
  document.head.appendChild(linkElement2);
  
  gamePattern = [];
  userClickedPattern = [];
  var randomChosenColour;
  var level = 0;
  var count = 0;
  var b = true;
  var counter = 0;
  var levelArray = [];
  var pointCounter = 0;
  var countDown;
  var countdownAudio = document.getElementById("myAudio");
  
  // Gives jQuery error if scriptAttribute runs without loading
  scriptAttribute.onload = function(){
  // Start when a key or button is clicked on the keyboard
  $("body").keydown(function(){
    gameStart();
    document.querySelector(".start-button").innerHTML = " ";
    document.querySelector(".start-button").style.border = "0px";
    b = false;
  });
  
  $(".start-button").click(function(){
    if(b){
      gameStart();
      document.querySelector(".start-button").innerHTML = " ";
      document.querySelector(".start-button").style.border = "0px";     
      b = false;
    }
  });
  
  // Check accuracy when color buttons are clicked
  $(".btn").click(function(){
    if(!b){
      var userChosenColor = this.id;
      playSound(userChosenColor);
      animatePress(userChosenColor);
      userClickedPattern.push(userChosenColor);
      let isCorr = checkSequence();
      if(!isCorr){
        gameOver();
      }
    }
  });
  
  // Game start function
  function gameStart(){
    if(b){
      $("#level-title").text("Level" + " " + 1);
      $("#level-point").text("Puan" + ":" + 0);
      $(".heart").text("❤️");
      nextSequence();
      counter++;
      b = false;
    }
  }
  
  // Function to control the user's click
  function checkSequence(){
    let c = userClickedPattern.length-1;
  
    if(gamePattern[c] == userClickedPattern[c]){
      if(userClickedPattern.length == gamePattern.length){
        count = 0;
  
        for(let k = 0; k<4; k++){
          document.querySelectorAll(".btn")[k].style.pointerEvents = "none";
        }
        setTimeout(() => {
          nextSequence();
        }, 1000);
        playSound(config.levelUpSound);   
        clearInterval(countDown);  
        countdownAudio.pause();
      }
      return true;
    }
    return false;
  }
  
  // Function to move to the next level
  function nextSequence(){
    setTimeout(function(){
      userClickedPattern = [];
  
      for(let k = 0; k<4; k++){
        document.querySelectorAll(".btn")[k].style.pointerEvents = "auto";
      }
      var randomNumber = Math.floor(Math.random()*4);
      const buttonColours = ["green","yellow", "blue", "red"];
      randomChosenColour = buttonColours[randomNumber];
      gamePattern.push(randomChosenColour);
      playSound(randomChosenColour);
      setTimeout(() => {
        animatePress(randomChosenColour);
      }, 100);
      
      level++;
      stopwatch();
      
      $("#level-title").text("Level" + " " + level);
      $("#level-point").text("Puan" + ":" + (level-1)*10);
  
      if((level-1)*10 === 50){
          winGame();
      }
    },1000 );
  }
  
  // Function to reach the highest score
  function maxPoint(level){    
      levelArray[pointCounter] = (level-1)*10;
        pointCounter++;
        window.localStorage.setItem(`${pointCounter}`,`${levelArray[pointCounter]}`);
        var max = levelArray[0];
        for (var i = 1; i < 3; i++) {
          if (levelArray[i] > max) {
            max = levelArray[i];
          }
        }
  
        if(pointCounter === 3){
          setTimeout(function() {
              loseFinishGame(max);
            }, 400);
      }
  }
  
  // Win the game function
  function winGame(){
    clearInterval(countDown);
    countdownAudio.pause();
    $("#win-game").text("Win !");
    clearContainer();
    playSound(config.winSound);
  }
  
  // What happens after each life is lost.
  function gameOver(){
    countdownAudio.pause();
    playSound(config.wrongSound);
    $("body").addClass("red");
    setTimeout(function(){
    $("body").removeClass("red");
    },300);
    gamePattern = [];
    userClickedPattern = [];
    $("#level-title").text("Game Over " + level);
    maxPoint(level);
    level = 0;
    count = 0;
    document.querySelector(".start-button").innerHTML = "TRY AGAIN";
    document.querySelector(".start-button").style.border = "4px solid whitesmoke";
    clearInterval(countDown);
    
    if(counter === 1){
      setTimeout(function() {
          document.querySelectorAll(".heart")[2].classList.add('hide');   
        }, 400);
      }
     else if(counter === 2){
      setTimeout(function() {
          document.querySelectorAll(".heart")[1].classList.add('hide');
        }, 400);
      }
     else {
      setTimeout(function() {
          document.querySelectorAll(".heart")[0].classList.add('hide');
        }, 300);
      clearContainer(); 
      }
    b = true;
  }
  
  // Actions in case the game ends completely
  function loseFinishGame(maxScore){
    $("#finish-game").text(`Game Over The Biggest Score You've Ever Scored: ${maxScore}`);
    playSound(config.loseSound);
  }
  
  // Function to clear the playground
  function clearContainer(){
    countdownAudio.pause();
    document.querySelector(".game-heart").style.display = "none";
    $(".heart").text(" ");
    document.querySelector("#level-title").style.display = "none";
    document.querySelector("#level-point").style.display = "none";
    document.querySelector(".container").style.display = "none";
    document.querySelector(".second-time").style.display = "none";
  }
  
  // Audio playback function
  function playSound(name){
    if(name == "green"){
      var audio = new Audio(config.greenSound);
    }
    else if(name == "yellow"){
      var audio = new Audio(config.yellowSound);
    }
    else if(name == "blue"){
      var audio = new Audio(config.blueSound);
    }
    else if(name == "red"){
      var audio = new Audio(config.redSound);
    }
    else{
      var audio = new Audio(name);
    }
    audio.play();
  }
  
  // Animation function when the button is clicked
  function animatePress(color){
    $("#" + color).addClass("pressed");
    setTimeout(function(){
      $("#" + color).removeClass("pressed");
    },150);
  }
  
  // Stops the previous counter and creates a new counter
  function stopwatch() {
    clearInterval(countDown);
    countdownAudio.pause();
    var counter = 10;
    document.querySelector(".second-time").textContent = counter;
    countDown = setInterval(() => {
      counter--;
      document.querySelector(".second-time").textContent = counter;
      if(counter === 4) {
        countdownAudio.play();
      }
  
      if(counter === 0) {
        clearInterval(countDown);
        gameOver();
      }
    }, 1000);
   }
  }
  