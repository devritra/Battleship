export function loadGame(){
    const gameBox = document.querySelector('.game-box');
    gameBox.innerHTML = '';
    gameBox.classList.remove('home');
    gameBox.classList.add('game');

    const guideText = document.createElement('p');
    guideText.classList.add('guide-text');
    guideText.textContent = 'Confirm ship placements to begin. click on ships to change placements';
    gameBox.appendChild(guideText);

    const errorText = document.createElement('p');
    errorText.classList.add('error-text');
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
            gameboardCell.dataset.coordinates = `[${i},${j}]`;
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
            gameboardCell.dataset.coordinates = `[${i},${j}]`;
            player2grid.appendChild(gameboardCell);
        }
    }
    gameBox.appendChild(player2grid);

    const shipControlForm = document.createElement('form');
    shipControlForm.action = '#';
    shipControlForm.classList.add('ship-placement-form');
    const shipNameDiv = document.createElement('div');
    const shipNameText = document.createElement('p');
    shipNameText.classList.add('ship-name-text');
    shipNameText.textContent = 'Ship';
    const shipNameBox = document.createElement('p');
    shipNameBox.classList.add('ship-name-box');
    shipNameDiv.appendChild(shipNameText);
    shipNameDiv.appendChild(shipNameBox);
    shipControlForm.appendChild(shipNameDiv);
    const shipCoordinateDiv = document.createElement('div');
    const shipCoordinateLabelVerticle = document.createElement('label');
    shipCoordinateLabelVerticle.classList.add('ship-coordinates-label-verticle');
    shipCoordinateLabelVerticle.textContent = 'Verticle';
    shipCoordinateDiv.appendChild(shipCoordinateLabelVerticle);
    shipCoordinateLabelVerticle.htmlFor = 'ship-coordinates-verticle';
    const shipCoordinateLabelHorizontal = document.createElement('label');
    shipCoordinateLabelHorizontal.classList.add('ship-coordinates-label-horizontal');
    shipCoordinateLabelHorizontal.textContent = 'Horizontal';
    shipCoordinateDiv.appendChild(shipCoordinateLabelHorizontal);
    shipCoordinateLabelHorizontal.htmlFor = 'ship-coordinates-horizontal';
    const shipCoordinateVerticle = document.createElement('input');
    shipCoordinateVerticle.type = 'number';
    shipCoordinateVerticle.max = '9';
    shipCoordinateVerticle.min = '0';
    shipCoordinateVerticle.name = 'ship-coordinates-verticle';
    shipCoordinateVerticle.id = 'ship-coordinates-verticle';
    shipCoordinateVerticle.placeholder = '(0 - 9)';
    shipCoordinateVerticle.required = true;
    shipCoordinateDiv.appendChild(shipCoordinateVerticle);
    const shipCoordinateHorizontal = document.createElement('input');
    shipCoordinateHorizontal.type = 'number';
    shipCoordinateHorizontal.max = '9';
    shipCoordinateHorizontal.min = '0';
    shipCoordinateHorizontal.name = 'ship-coordinates-horizontal';
    shipCoordinateHorizontal.id = 'ship-coordinates-horizontal';
    shipCoordinateHorizontal.placeholder = '(0 - 9)';
    shipCoordinateHorizontal.required = true;
    shipCoordinateDiv.appendChild(shipCoordinateHorizontal);
    shipControlForm.appendChild(shipCoordinateDiv);
    const shipDirectionDiv = document.createElement('div');
    const shipDirectionText = document.createElement('label');
    shipDirectionText.classList.add('ship-direction.text');
    shipDirectionText.textContent = 'Direction';
    shipDirectionText.htmlFor = 'ship-direction-input';
    shipDirectionDiv.appendChild(shipDirectionText);
    const shipDirectionInput = document.createElement('select');
    shipDirectionInput.name = 'ship-direction-input';
    shipDirectionInput.id = 'ship-direction-input';
    shipDirectionInput.required = true;
    const selectAnOption = document.createElement('option');
    selectAnOption.textContent = 'select a direction';
    selectAnOption.value = '';
    const selectUp = document.createElement('option');
    selectUp.textContent = 'Up';
    selectUp.value = 'up';
    const selectRight = document.createElement('option');
    selectRight.textContent = 'Right';
    selectRight.value = 'right';
    const selectDown = document.createElement('option');
    selectDown.textContent = 'Down';
    selectDown.value = 'down';
    const selectLeft = document.createElement('option');
    selectLeft.textContent = 'Left';
    selectLeft.value = 'left';
    shipDirectionInput.appendChild(selectAnOption);
    shipDirectionInput.appendChild(selectUp);
    shipDirectionInput.appendChild(selectRight);
    shipDirectionInput.appendChild(selectDown);
    shipDirectionInput.appendChild(selectLeft);
    shipDirectionDiv.appendChild(shipDirectionInput);
    shipControlForm.appendChild(shipDirectionDiv);
    const submitBtnDiv = document.createElement('div');
    const submitBtn = document.createElement('button');
    submitBtn.type = 'submit';
    submitBtn.classList.add('submit-btn');
    submitBtn.textContent = 'Confirm';
    submitBtnDiv.appendChild(submitBtn);
    shipControlForm.appendChild(submitBtnDiv);
    shipCoordinateVerticle.disabled = true;
    shipCoordinateHorizontal.disabled = true;
    shipDirectionInput.disabled = true;
    submitBtn.disabled = true;
    gameBox.appendChild(shipControlForm);

    const playBtn = document.createElement('button');
    playBtn.classList.add('play-btn');
    playBtn.textContent = 'Play';
    gameBox.appendChild(playBtn);
}