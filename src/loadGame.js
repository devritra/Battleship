export function loadGame(player1, player2){
    const gameBox = document.querySelector('.game-box');
    gameBox.innerHTML = '';
    gameBox.classList.remove('home');
    gameBox.classList.add('game');

    const guideText = document.createElement('p');
    guideText.classList.add('guide-text');
    guideText.textContent = 'guide text';
    gameBox.appendChild(guideText);

    const errorText = document.createElement('p');
    errorText.classList.add('error-text');
    errorText.textContent = 'error text';
    gameBox.appendChild(errorText);

    const player1Name = document.createElement('p');
    player1Name.classList.add('player1-name');
    player1Name.textContent = 'player 1';
    gameBox.appendChild(player1Name);

    const player2Name = document.createElement('p');
    player2Name.classList.add('player2-name');
    player2Name.textContent = 'player 2';
    gameBox.appendChild(player2Name);

    const player1grid = document.createElement('div');
    player1grid.classList.add('player1-grid');
    for(let i = 0; i < player1.gameboardGrid.length; i++){
        for(let j = 0; j < player1.gameboardGrid[i].length; j++){
            const gameboardCell = document.createElement('div');
            gameboardCell.classList.add('gameboard-cell');
            switch (player1.gameboardGrid[i][j]) {
                case 'c':
                    gameboardCell.textContent = 'c';
                    break;
                case 'b':
                    gameboardCell.textContent = 'b';
                    break;
                case 'd':
                    gameboardCell.textContent = 'd';
                    break;
                case 's':
                    gameboardCell.textContent = 's';
                    break;
                case 'p':
                    gameboardCell.textContent = 'p';
                    break;
                default:
                    break;
            }
            player1grid.appendChild(gameboardCell);
        }
    }
    gameBox.appendChild(player1grid);
}