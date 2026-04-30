const shipBgImages = {
    horizontal: {
        carrier: 'https://i.pinimg.com/736x/5c/ff/42/5cff42a4bba3cc412a2d8274fe81ec0b.jpg',
        battleship: 'https://i.pinimg.com/736x/5c/ff/42/5cff42a4bba3cc412a2d8274fe81ec0b.jpg',
        destroyer: 'https://i.pinimg.com/736x/5c/ff/42/5cff42a4bba3cc412a2d8274fe81ec0b.jpg',
        submarine: 'https://i.pinimg.com/736x/5c/ff/42/5cff42a4bba3cc412a2d8274fe81ec0b.jpg',
        patrolBoat: 'https://i.pinimg.com/736x/5c/ff/42/5cff42a4bba3cc412a2d8274fe81ec0b.jpg'
    },
    verticle: {
        carrier: 'https://i.pinimg.com/736x/9d/d5/2e/9dd52e9eea9db83150f567c087743956.jpg',
        battleship: 'https://i.pinimg.com/736x/9d/d5/2e/9dd52e9eea9db83150f567c087743956.jpg',
        destroyer: 'https://i.pinimg.com/736x/9d/d5/2e/9dd52e9eea9db83150f567c087743956.jpg',
        submarine: 'https://i.pinimg.com/736x/9d/d5/2e/9dd52e9eea9db83150f567c087743956.jpg',
        patrolBoat: 'https://i.pinimg.com/736x/9d/d5/2e/9dd52e9eea9db83150f567c087743956.jpg'
    }
}
function setBgOnShips(shipDiv, shipType, bgUrlSet){
    switch (shipType) {
        case 'carrier':
            shipDiv.style.backgroundImage = `url(${bgUrlSet.carrier})`;
            shipDiv.style.backgroundSize = '100% 100%';
            break;
        case 'battleship':
            shipDiv.style.backgroundImage = `url(${bgUrlSet.battleship})`;
            shipDiv.style.backgroundSize = '100% 100%';
            break;
        case 'destroyer':
            shipDiv.style.backgroundImage = `url(${bgUrlSet.destroyer})`;
            shipDiv.style.backgroundSize = '100% 100%';
            break;
        case 'submarine':
            shipDiv.style.backgroundImage = `url(${bgUrlSet.submarine})`;
            shipDiv.style.backgroundSize = '100% 100%';
            break;
        case 'patrol boat':
            shipDiv.style.backgroundImage = `url(${bgUrlSet.patrolBoat})`;
            shipDiv.style.backgroundSize = '100% 100%';
            break;
        default:
            break;
    }
}
export function displayShipsOnGrids(player1){
    const player1Ships = player1.wholeGameboardInstance.ships;
    const player1Grid = document.querySelector('.player1-grid');
    const player1GridCells = Array.from(player1Grid.childNodes);
    player1GridCells.forEach(cell => {
        cell.innerHTML = '';
    });
    player1Ships.forEach(ship => {
        const targetGridCell = player1GridCells.find((cell)=>{
            return JSON.stringify(ship.startingPosition) === cell.dataset.coordinates;
        });
        targetGridCell.style.position = 'relative';
        const shipDiv = document.createElement('div');
        shipDiv.dataset.shipId = ship.shipId;
        shipDiv.classList.add('ship-div');
        // shipDiv.style.height = '30px';
        // shipDiv.style.width = `${30 * ship.length}px`;
        shipDiv.style.backgroundColor = 'yellow';
        shipDiv.style.display = 'grid';
        for(let i = 0; i < ship.length; i++){
            const div = document.createElement('div');
            div.classList.add('ship-cell');
            div.dataset.coordinates = `[${ship.shipCoordinates[i]}]`;
            shipDiv.appendChild(div);
        }
        shipDiv.style.position = 'absolute';
        switch (ship.directionFromStartingPosition) {
            case 'up':
                shipDiv.style.gridTemplateRows = `repeat(${ship.length},1fr)`;
                shipDiv.style.width = '30px';
                shipDiv.style.height = `${30 * ship.length}px`;
                shipDiv.style.bottom = '0';
                setBgOnShips(shipDiv, ship.type, shipBgImages.verticle);
                break;
            case 'right':
                shipDiv.style.gridTemplateColumns = `repeat(${ship.length},1fr)`;
                shipDiv.style.height = '30px';
                shipDiv.style.width = `${30 * ship.length}px`;
                shipDiv.style.left = '0';
                setBgOnShips(shipDiv, ship.type, shipBgImages.horizontal);
                break;
            case 'down':
                shipDiv.style.gridTemplateRows = `repeat(${ship.length},1fr)`;
                shipDiv.style.width = '30px';
                shipDiv.style.height = `${30 * ship.length}px`;
                shipDiv.style.top = '0';
                setBgOnShips(shipDiv, ship.type, shipBgImages.verticle);
                break;
            case 'left':
                shipDiv.style.gridTemplateColumns = `repeat(${ship.length},1fr)`;
                shipDiv.style.height = '30px';
                shipDiv.style.width = `${30 * ship.length}px`;
                shipDiv.style.right = '0';
                setBgOnShips(shipDiv, ship.type, shipBgImages.horizontal);
                break;
            default:
                break;
        }
        targetGridCell.appendChild(shipDiv);
    });
}