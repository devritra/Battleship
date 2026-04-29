export function loadScoreBoard(){
    const gameBox = document.querySelector('.game-box');
    const mainScoreBoardDiv = document.createElement('div');
    mainScoreBoardDiv.classList.add('main-score-board-div');
    const player1ScoreBoardDiv = document.createElement('div');
    const player2ScoreBoardDiv = document.createElement('div');

    player1ScoreBoardDiv.classList.add('player1-score-board-div');
    player2ScoreBoardDiv.classList.add('player2-score-board-div');

    const player1ScoreName = document.createElement('p');
    player1ScoreName.classList.add('player1-score-name');
    player1ScoreName.textContent = 'player 1';
    const player1ScoreText = document.createElement('p');
    player1ScoreText.classList.add('player1-score-text');
    player1ScoreText.textContent = 'No of ship sunk:';
    const player1Score = document.createElement('p');
    player1Score.classList.add('player1-score');
    player1Score.textContent = '1';
    player1ScoreBoardDiv.appendChild(player1ScoreName);
    player1ScoreBoardDiv.appendChild(player1ScoreText);
    player1ScoreBoardDiv.appendChild(player1Score);

    const player2ScoreName = document.createElement('p');
    player2ScoreName.classList.add('player2-score-name');
    player2ScoreName.textContent = 'player 2';
    const player2ScoreText = document.createElement('p');
    player2ScoreText.classList.add('player2-score-text');
    player2ScoreText.textContent = 'No of ship sunk:';
    const player2Score = document.createElement('p');
    player2Score.classList.add('player2-score');
    player2Score.textContent = '1';
    player2ScoreBoardDiv.appendChild(player2ScoreName);
    player2ScoreBoardDiv.appendChild(player2ScoreText);
    player2ScoreBoardDiv.appendChild(player2Score);

    const resetBtn = document.createElement('button');
    resetBtn.classList.add('reset-btn');
    resetBtn.textContent = 'Reset';
    
    mainScoreBoardDiv.appendChild(player1ScoreBoardDiv);
    mainScoreBoardDiv.appendChild(player2ScoreBoardDiv);
    mainScoreBoardDiv.appendChild(resetBtn);
    gameBox.appendChild(mainScoreBoardDiv);
}