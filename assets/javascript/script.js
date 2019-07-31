document.addEventListener('DOMContentLoaded', function(f) {
  console.log("Loaded");
  // questions taken from https://bestlifeonline.com/crazy-random-facts/
  const questionList = [{
      qQuestion: "How much time will the average person spend waiting for red lights to turn green?",
      qGuesses: ["50 minutes", "1 month", "6 months", "1 year"],
      correctAnser: 2,
    },
    {
      qQuestion: "A bolt of lightning contains enough energy to toast how many pieces of bread?",
      qGuesses: ["1,000", "10,000", "100,000", "1,000,000"],
      correctAnser: 2,
    },
    {
      qQuestion: "The worlds largest pyramid is located in? ",
      qGuesses: ["Giza", "Khufu", "El Mirador", "Cholula"],
      correctAnser: 1,
    },
    {
      qQuestion: "The largest snowflake on record was __ inches wide",
      qGuesses: ["1", "12", "14", "15"],
      correctAnser: 3,
    },
    {
      qQuestion: "This punctuation mark '?!' is called an interrobang",
      qGuesses: ["True", "False"],
      correctAnser: 0,
    },
    {
      qQuestion: "Melting glaciers make a fizzy sound called 'bergy seltzer'",
      qGuesses: ["True", "False"],
      correctAnser: 0,
    },
    {
      qQuestion: "Flipping a shark upside down renders it immobile for up to ",
      qGuesses: ["10 seconds", "15 minutes", "30 minutes", "1 hour"],
      correctAnser: 1,
    },
  ]
  let time = 60;
  let intervalID;
  let correctNumberAnswered = 0;
  let incorrectNumberAnswered = 0;

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
    calculateScore();
  }


  function calculateScore() {
    for (i = 0; i < questionList.length; i++) {
      //console.log(i);
      if (document.querySelector('#q' + i + 'g' + questionList[i].correctAnser).checked) {
        correctNumberAnswered++;
      } else {
        incorrectNumberAnswered++;
      }
    }
    alert("Correct number answered: " + correctNumberAnswered + " incorrect number answered: " + incorrectNumberAnswered );

  }// end for loop


  function loadQuestionList() {
    const questionBody = document.querySelector(".questionBody");

    for (i = 0; i < questionList.length; i++) {
      // div wrapper for the question/answer structure
      let newDiv = document.createElement("div");
      newDiv.setAttribute('id', 'question' + i);
      // p tag for holding question information

      let newP = document.createElement('p');
      newP.innerHTML = questionList[i].qQuestion;
      newDiv.appendChild(newP);

      // create a break between the question and the answers.
      let newBreak = document.createElement('br');
      newP.appendChild(newBreak);

      for (j = 0; j < questionList[i].qGuesses.length; j++) {
        //creates the <input>
        let newInput = document.createElement('input');

        let newSpan = document.createElement('span');
        newSpan.setAttribute('class', 'questionSpan')
        newSpan.innerHTML = questionList[i].qGuesses[j];
        // sets the answer for the question in innerHTML
        newInput.setAttribute('class', 'inputButton');
        newInput.setAttribute('type', 'radio');
        newInput.setAttribute('id', 'q' + i + 'g' + j);
        newInput.setAttribute('value', j); // this will drive the correct answer.
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
