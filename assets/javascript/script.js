document.addEventListener('DOMContentLoaded', function(f) {
  console.log("Loaded");
  const questionList = [
    {
      qQuestion: "What is my name?",
      qGuesses: ["Bob", "Bill", "He who musn't be named", "Taylor"],
      correctAnser: 3,
    },
    {
      qQuestion: "Question: B",
      qGuesses: ["A", "B", "C", "D"],
      correctAnser: 2,
    },
    {
      qQuestion: "Question: C",
      qGuesses: ["A", "B", "C", "D"],
      correctAnser: 3,
    },
    {
      qQuestion: "Question: D",
      qGuesses: ["A", "B", "C", "D"],
      correctAnser: 4,
    },
    {
      qQuestion: "Question: B",
      qGuesses: ["A", "B", "C",],
      correctAnser: 2,
    },
  ]
  let time = 60;
  let intervalID;

  // called when the page loads.
  // starts the count down clock
  function beginTimer() {
    intervalID = setInterval(updateClock, 1000);
  }

  // runs every second.
  //decrement time and updates clock.
  function updateClock() {
    time--;
    document.querySelector(".timer").innerHTML = "Time Remaining: " + time + " seconds";

    if (time < 1) {
      concludeGame();
    }
  }
  // if the time has run out we will end the game.
  // tally up correct scores and display to user.
  function concludeGame() {
    clearInterval(intervalID);
    //alert("Game has ended");
  }

  function loadQuestionList(){
    const questionBody = document.querySelector(".questionBody");

    for (i=0; i < questionList.length; i++){
      // div wrapper for the question/answer structure
      let newDiv = document.createElement("div");
      // p tag for holding question information

      let newP = document.createElement('p');
      newP.innerHTML = questionList[i].qQuestion;
      newDiv.appendChild(newP);

      // create a break between the question and the answers.
      let newBreak = document.createElement('br');
      newP.appendChild(newBreak);

      for (j=0; j < questionList[i].qGuesses.length; j++){
        //creates the <input>
        let newInput = document.createElement('input');

        let newSpan = document.createElement('span');
        newSpan.innerHTML = questionList[i].qGuesses[j];
        // sets the answer for the question in innerHTML
        newInput.setAttribute('class','inputButton');
        newInput.setAttribute('type','radio');
        newInput.setAttribute('name','q'+ i);
        newInput.setAttribute('value', i);
        newSpan.prepend(newInput);
        // append the input to the parent <p>
        newP.appendChild(newSpan);
      } // end creating question inputs

      questionBody.appendChild(newDiv);

    }
  };



  // loads question list
  loadQuestionList();
  // starts the game. runs when the page loads.
  beginTimer();
}) // end DOM content loaded function
