let userOptions = document.querySelectorAll(".user-choice");
let compStone = document.querySelector("#comp-stone");
let compPaper = document.querySelector("#comp-paper");
let compScissors = document.querySelector("#comp-scissors");
let userScore = document.querySelector(".userScore");
let compScore = document.querySelector(".compScore");

let scoreUser = 0;
let scoreComp = 0;




let choices = ["stone", "paper", "scissors"];
var userSelectedChoice;

userOptions.forEach((userChoice, i) => {
  userChoice.getAttribute("id");
  userChoice.addEventListener("click", () => {
    console.log(userChoice, ` was clicked`, i);
    userSelectedChoice = userChoice.getAttribute("id"); // Assign the selected choice to userSelectedChoice
    console.log(userSelectedChoice);
    play(userSelectedChoice);
    
  });
});

function play(userSelectedChoice) {
  let randIndex = Math.floor(Math.random() * 3);
  let compChoice = choices[randIndex];
  showCompChoice(compChoice);
  result(userSelectedChoice, compChoice);
}

function result(userSelectedChoice, compChoice) {
  if (userSelectedChoice == "user-stone" && compChoice == "stone") {
    console.log("DRAW");
    console.log("Comp choice = ", compChoice);

  } else if (userSelectedChoice == "user-stone" && compChoice == "paper") {
    console.log("COMP WINS");
    console.log("Comp choice = ", compChoice);
    compScore.innerText = `${scoreComp + 1}`;
    scoreComp++;

  } else if (userSelectedChoice == "user-stone" && compChoice == "scissors") {
    console.log("USER WINS");
    console.log("Comp choice = ", compChoice);
    userScore.innerText = `${scoreUser + 1}`;
    scoreUser++;

  } else if (userSelectedChoice == "user-paper" && compChoice == "stone") {
    console.log("USER WINS");
    console.log("Comp choice = ", compChoice);
    userScore.innerText = `${scoreUser + 1}`;
    scoreUser++;

  } else if (userSelectedChoice == "user-paper" && compChoice == "paper") {
    console.log("DRAW");
    console.log("Comp choice = ", compChoice);

  } else if (userSelectedChoice == "user-paper" && compChoice == "scissors") {
    console.log("COMP WINS");
    console.log("Comp choice = ", compChoice);
    compScore.innerText = `${scoreComp + 1}`;
    scoreComp++;

  } else if (userSelectedChoice == "user-scissors" && compChoice == "stone") {
    console.log("COMP WINS");
    console.log("Comp choice = ", compChoice);
    compScore.innerText = `${scoreComp + 1}`;
    scoreComp++;

  } else if (userSelectedChoice == "user-scissors" && compChoice == "paper") {
    console.log("USER WINS");
    console.log("Comp choice = ", compChoice);
    userScore.innerText = `${scoreUser + 1}`;
    scoreUser++;

  } else if (userSelectedChoice == "user-scissors" && compChoice == "scissors") {
    console.log("DRAW");
    console.log("Comp choice = ", compChoice);
  }
}

function showCompChoice(compChoice){

    if (compChoice == "stone"){
        compStone.classList.remove("hide");
        compPaper.classList.add("hide");
        compScissors.classList.add("hide");
    }

    else if(compChoice == "paper"){
        compStone.classList.add("hide");
        compPaper.classList.remove("hide");
        compScissors.classList.add("hide");
    }

    else{
        compStone.classList.add("hide");
        compPaper.classList.add("hide");
        compScissors.classList.remove("hide");
    }
}
