const totalScore = {
    Runs: 0,
    Wickets: 0,
    Overs: 0.0
};

let score = 0; // Declare score outside the function
let balls = 0; // Declare balls outside the function
let wickets = 0; // Declare wickets outside the function
let ball = ''; // Declare ball outside the function

function ballBowling() {
    let overRuns = document.querySelector('.overRuns');
    
    const buttonBottom = document.querySelectorAll('.buttons-bottom button');
    buttonBottom.forEach((button) => {
        button.addEventListener("click", () => {
            if (button.innerHTML === 'Wide') {
                score += 1;
                ball += 'Wd ';
            } else if (button.innerHTML === 'NoBall') {
                score += 1;
                ball += 'NB ';
            } else if (button.innerHTML === 'Wicket') {
                wickets += 1;
                balls += 1;
                ball += 'W ';
                updateOvers();
            }
            
            addScore();
            updateScore();
        });
    });

    const buttonTop = document.querySelectorAll('.buttons-top button');
    buttonTop.forEach((button) => {
        button.addEventListener("click", () => {
            score += Number(button.innerHTML);
            balls += 1;
            ball += button.innerHTML + ' ';
            addScore();
            updateOvers();
            updateScore();
        });
    });
    
    function updateScore() {
        if (balls === 6) {
            overRuns.innerHTML += `<button class="ball">${ball}</button><br>`;
            balls = 0; // Reset balls for the next over
        } else {
            overRuns.innerHTML += `<button class="ball">${ball}</button>`;
        }
        ball = ''; 

        let display = document.querySelector('.team-score');
        display.innerHTML = `Team's Score is ${totalScore.Runs} runs for ${totalScore.Wickets} wickets and overs Bowled ${totalScore.Overs.toFixed(1)}`;

        let runRate = document.querySelector('.team-RunRate');
        runRate.innerHTML = `Team's RunRate is ${(totalScore.Runs / totalScore.Overs).toFixed(2)}`;
    }
    
    function addScore() {
        totalScore.Runs = score;
        totalScore.Wickets = wickets;
    }

    function updateOvers() {
        totalScore.Overs = Math.floor(totalScore.Overs) + ((totalScore.Overs % 1) + 0.1);
        if ((totalScore.Overs % 1) >= 0.6) {
            totalScore.Overs = Math.floor(totalScore.Overs) + 1.0;
        }
    }

    
}

ballBowling();
