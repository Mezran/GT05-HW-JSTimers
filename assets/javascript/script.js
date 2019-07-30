const questionList = [{
  qQuestion: "What is the meaning of life?",
  qAnswer1: "A",
  qAnswer2: "B",
  qAnswer3: "C",
  qAnswer4: "D",
  correctAnser: 1,

}]


document.addEventListener('DOMContentLoaded', function(f) {
  console.log("Loaded");
  let time = 60;
  let intervalID;

  function beginTimer(){
    intervalID = setInterval(updateClock, 1000);
  }

  function updateClock(){
    time--;
    document.querySelector(".timer").innerHTML = "Time Remaining: " + time + " seconds";

    if(time < 1){
      concludeGame();
    }
  }

function concludeGame(){
  clearInterval(intervalID);
  alert("Game has ended");
}








beginTimer();
}) // end DOM content loaded function
