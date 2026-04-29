import './style.css';
import { loadGame } from './loadGame';
import { Player } from './Player';
import { displayShipsOnGrids } from './displayShipsOnGrids';

const startGameBtn = document.querySelector('.start-game-btn');
const body = document.querySelector('body');
let gamePhase;
let targetShip;
const player1 = new Player('human');
// const player2 = new Player('computer');

startGameBtn.addEventListener('click',()=>{
    loadGame();
    displayShipsOnGrids(player1);
    gamePhase = 'prep';
})

body.addEventListener('click',(e)=>{
    if(e.target.closest('.ship-div')){
        targetShip = player1.wholeGameboardInstance.ships.find((ship)=>{
            return e.target.closest('.ship-div').dataset.shipId === ship.shipId;
        })
        const shipNameBox = document.querySelector('.ship-name-box');
        shipNameBox.textContent = targetShip.type;

        const shipCoordinateVerticle = document.querySelector('#ship-coordinates-verticle');
        const shipCoordinateHorizontal = document.querySelector('#ship-coordinates-horizontal');
        const shipCoordinates = targetShip.startingPosition;
        shipCoordinateVerticle.value = shipCoordinates[0];
        shipCoordinateHorizontal.value = shipCoordinates[1];

        const shipDirectionInput = document.querySelector('#ship-direction-input');
        shipDirectionInput.value = targetShip.directionFromStartingPosition;
    } else if(e.target.className === 'submit-btn'){
        e.preventDefault();
        const shipCoordinateVerticle = document.querySelector('#ship-coordinates-verticle');
        const shipCoordinateHorizontal = document.querySelector('#ship-coordinates-horizontal');
        const shipDirectionInput = document.querySelector('#ship-direction-input');

        player1.wholeGameboardInstance.moveShip(
            targetShip.shipId,
            [Number(shipCoordinateVerticle.value),Number(shipCoordinateHorizontal.value)],
            shipDirectionInput.value
        );
        displayShipsOnGrids(player1);
    }
})