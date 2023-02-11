
let userResult = 0;
let computerResult = 0;

function startGame(choice){ 

    let userScore = document.getElementById("userScore_point");
    let computerScore = document.getElementById("computerScore_point");
    let play = document.getElementById("play");
    let rock = document.getElementById("rock");
    let paper = document.getElementById("paper");
    let scissors = document.getElementById("scissors");
    let container = document.getElementById("container");

    let userChoice = choice.id;                                       // let's assign choice of user to variable first.
    let randomNumber = Math.floor(Math.random() * 3);                 // make and assign to randomNumber for choice of computer.
    let computerChoice = ["rock", "paper", "scissors"][randomNumber]; // assign choice of computer to variable.

    let gamePoints = {                                                // make gamePoints as object style for calculation later 
        rock: { "scissors": 1, "rock": 0.5, "paper": 0 },
        paper: { "rock": 1, "paper": 0.5, "scissors": 0 },
        scissors: { "paper": 1, "scissors": 0.5, "rock": 0 }
    };

    let userPoints = gamePoints[userChoice][computerChoice];          // get a point meets the point we chose from array for user.
    let computerPoints = gamePoints[computerChoice][userChoice];      // get a point meets the point we chose from array for Computer.

    let storedPicture = {                                             // get src of storedPictures
        rock: rock.src,                                         
        paper: paper.src,
        scissors: scissors.src
    };

    rock.remove();                                                    // remove the pictures for see the result.
    paper.remove();
    scissors.remove();

    let userPicture = document.createElement("img");                  // create new Element to see the chosen picture.
    let computerPicture = document.createElement("img");              // create new Element to see the chosen picture.
    let resultMessage = document.createElement("div");                // create new div to see the resultMessage.

    userPicture.src = storedPicture[userChoice];                      // connect pictures to their sources.
    computerPicture.src = storedPicture[computerChoice];

    container.appendChild(userPicture);                               // put created Elements under of parent div(container).
    container.appendChild(computerPicture);
    container.appendChild(resultMessage);

    resultMessage.classList.remove("win", "lose", "draw");            // check the points with conditions and write on resultMessage.

    if (userPoints === 0) {
        resultMessage.innerHTML = "You lost";
        resultMessage.classList.add("lose");
    }

    else if (userPoints === 0.5) {
        resultMessage.innerHTML = "draw!";
        resultMessage.classList.add("draw");
    }
    else {
        resultMessage.innerHTML = "You win";
        resultMessage.classList.add("win");     
    }

    if (userPoints === 1) {                                           // score conditions.
        userResult++;
        userScore.textContent = userResult;
    }

    if (computerPoints === 1) {
        computerResult++;
        computerScore.textContent = computerResult;
    }

    play.addEventListener("click", () => {                            // play button conditions.

        if (resultMessage) {
            container.textContent = "";
        }

        if (container.textContent === "") {
            container.appendChild(rock);
            container.appendChild(paper);
            container.appendChild(scissors);
        }

    });
}