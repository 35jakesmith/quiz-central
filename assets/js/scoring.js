function viewHighScores() {
    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];

    for (let i = 0; i < highscores.length; i++) {
        var scoreTagEl = document.createElement("li");
        scoreTagEl.textContent = highscores[i].initials + ' ' + highscores[i].score;
        
        var highscoreEl = document.getElementById("highscore-page");
        highscoreEl.appendChild(scoreTagEl);
    }
}

viewHighScores();