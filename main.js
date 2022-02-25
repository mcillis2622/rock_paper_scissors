$(function () {
  let yourChoice = "";
  let botChoice = "";
  let yourScore = 0;
  let botScore = 0;
  let result = "";

  //button functionality using JQuery
  $("#paper").click(() => {
    yourChoice = "paper";
    botPicker();
    compare();
    changeScoreboard();
  });

    $("#rock").click(() => {
      yourChoice = "rock";
      botPicker();
      compare();
      changeScoreboard();
    });

    $("#scissors").click(() => {
        yourChoice = "scissors";
        botPicker();
        compare();
        changeScoreboard();
    });

  //Get selection for bot
  let botPicker = () => {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    console.log(randomNum);
    if (randomNum === 1) {
      botChoice = "rock";
    } else if (randomNum === 2) {
      botChoice = "paper";
    } else {
      botChoice = "scissors";
    }
    console.log(botChoice);
  };

  //Game Functionality
  let compare = () => {
    if (yourChoice === botChoice) {
      //figure out who wins
      console.log("tie");
      //declare result
      result = "tie";
    } else if (yourChoice === "rock" && botChoice === "paper") {
      console.log("you lose");
      result = "lose";
    } else if (yourChoice === "rock" && botChoice === "scissors") {
      console.log("you win");
      result = "win";
    } else if (yourChoice === "paper" && botChoice === "rock") {
      console.log("you win");
      result = "win";
    } else if (yourChoice === "paper" && botChoice === "scissors") {
      console.log("you lose");
      result = "lose";
    } else if (yourChoice === "scissors" && botChoice === "paper") {
      console.log("you win");
      result = "win";
    } else if (yourChoice === "scissors" && botChoice === "rock") {
      console.log("you lose");
      result = "lose";
    } else {
      console.log("something went wrong");
    }
  };

  let changeScoreboard = () => {
    if (result === "win") {
      yourScore += 1;
      console.log(`Your score is ${yourScore}`)
      $("#your-score").text(`${yourScore}`);
    } else if (result === "lose") {
      botScore += 1;
      console.log(`Bot score is ${botScore}`)
      $("#bot-score").text(`${botScore}`);
    } else {
      console.log("tie");
    }
  };
});
