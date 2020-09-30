var userChoice = prompt("Choose One : Rock / Paper / Scissors");
var computerChoice = Math.random();
if (computerChoice  > 0 && computerChoice <= 0.33) {
	computerChoice = "rock";
    }
    else if(computerChoice > 0.33 && computerChoice <= 0.66) {
	computerChoice = "paper";
    }
    else
        {
            computerChoice = "scissors";
            } 
            console.log("Computer: " + computerChoice);
            var compare = function (choice1,choice2) {
                if(choice1 == choice2) {
                    return "The result is a tie!! Playing again would be a great Idea";
                    }
                else if(choice1 === "rock") {
                    if (choice2 === "scissors") {
                        return "Rock Wins";
                        }
                    else {
                        return "Paper Wins";
                        }
                    }
                else if (choice1 === "paper") {
                    if (choice2 === "rock") {
                     return "Paper Wins";
                    }
                    else {
                     return "Scissors Wins";
                        }
                }
                else if (choice1 === "scissors") {
                    if(choice2 === "paper") {
                        return "Scissors wins";
                        }
                    else {
                        return "Rock wins";
                        }
                    }
                else {
                    return "Invalid choice!";
                    }
             };
    compare(userChoice,computerChoice);
