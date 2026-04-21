export function loadGame(){
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
    for(let i = 0; i < 10; i++){
        for(let j = 0; j < 10; j++){
            const gameboardCell = document.createElement('div');
            gameboardCell.classList.add('gameboard-cell');
            gameboardCell.classList.add(`[${i},${j}]`);
            player1grid.appendChild(gameboardCell);
        }
    }
    gameBox.appendChild(player1grid);

    const player2grid = document.createElement('div');
    player2grid.classList.add('player2-grid');
    for(let i = 0; i < 10; i++){
        for(let j = 0; j < 10; j++){
            const gameboardCell = document.createElement('div');
            gameboardCell.classList.add('gameboard-cell');
            gameboardCell.classList.add(`[${i},${j}]`);
            player2grid.appendChild(gameboardCell);
        }
    }
    gameBox.appendChild(player2grid);

    const shipName = document.createElement('div');
    shipName.classList.add('ship-name');
    shipName.textContent = 'ship'
    gameBox.appendChild(shipName);

    const coordinates = document.createElement('div');
    coordinates.classList.add('coordinates');
    coordinates.textContent = 'coordinates'
    gameBox.appendChild(coordinates);

    const direction = document.createElement('div');
    direction.classList.add('direction');
    direction.textContent = 'direction'
    gameBox.appendChild(direction);
}