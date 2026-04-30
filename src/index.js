import './style.css';
import { loadGame } from './loadGame';
import { Player } from './Player';
import { displayShipsOnGrids } from './displayShipsOnGrids';
import { loadForm } from './loadForm';
import { enableFormElements, disableFormElements } from './enableOrDiableForm';
import { loadScoreBoard } from './loadScoreBoard';
import { playComputerTurn } from './playComputerTurn';
import player1HitIcon from './images/player1-hit-icon.jpg';
import player1MissIcon from './images/player1-miss-icon.jpeg';
import player2HitIcon from './images/player2-hit-icon.png';
import player2MissIcon from './images/player2-miss-icon.png';

const startGameBtn = document.querySelector('.start-game-btn');
const body = document.querySelector('body');
let gamePhase;
let targetShip;
let isGameOver;
let player1Turn = true;
let player2Turn = false;
let player1 = new Player('human');
let player2 = new Player('computer');

startGameBtn.addEventListener('click',()=>{
    loadGame();
    displayShipsOnGrids(player1);
    gamePhase = 'prep';
})

body.addEventListener('click',(e)=>{
    if(gamePhase === 'prep'){
        const errorText = document.querySelector('.error-text');
        const guideText = document.querySelector('.guide-text');
        if(e.target.closest('.ship-div')){
            errorText.textContent = '';
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
            enableFormElements();
        } else if(e.target.className === 'submit-btn'){
            e.preventDefault();
            const shipCoordinateVerticle = document.querySelector('#ship-coordinates-verticle');
            const shipCoordinateHorizontal = document.querySelector('#ship-coordinates-horizontal');
            const shipDirectionInput = document.querySelector('#ship-direction-input');

            try {
                player1.wholeGameboardInstance.moveShip(
                    targetShip.shipId,
                    [Number(shipCoordinateVerticle.value),Number(shipCoordinateHorizontal.value)],
                    shipDirectionInput.value
                );
            } catch (error) {
                errorText.textContent = error;
                player1.wholeGameboardInstance.ships.push(targetShip);
            }
            
            displayShipsOnGrids(player1);
            loadForm();
            disableFormElements();
        } else if(e.target.className === 'play-btn'){
            const gameBox = document.querySelector('.game-box');
            const shipControlForm = document.querySelector('.ship-placement-form');
            gameBox.removeChild(shipControlForm);
            gameBox.removeChild(e.target);
            loadScoreBoard();
            gamePhase = 'match';
            guideText.textContent = `Player 1's trun`;
        }        
    }
    if(gamePhase === 'match'){
        const errorText = document.querySelector('.error-text');
        const guideText = document.querySelector('.guide-text');
        if(e.target.className === 'reset-btn'){
            player1 = new Player('human');
            player2 = new Player('computer');
            loadGame();
            displayShipsOnGrids(player1);
            gamePhase = 'prep';
            player1Turn = true;
            player2Turn = false;
            isGameOver = false;
        }
        if(isGameOver){
            return;
        }
        if(e.target.closest('.gameboard-cell')){
            errorText.textContent = '';
            if(player2Turn && e.target.closest('.player1-grid')){
                if(e.target.closest('.ship-div')){
                    const targetCoordinates = JSON.parse(e.target.dataset.coordinates);
                    try {
                        player1.wholeGameboardInstance.receiveAttack(targetCoordinates);
                    } catch {
                        setTimeout( playComputerTurn, 1000);
                        return;
                    }
                    const player1Ships = player1.wholeGameboardInstance.ships;
                    let noOfShipsSunk = 0;
                    player1Ships.forEach((ship)=>{
                        if(ship.isSunk){
                            noOfShipsSunk++;
                        }
                    })
                    const player1Score = document.querySelector('.player1-score');
                    player1Score.textContent = noOfShipsSunk;
                    const player1HitIconImg = new Image();
                    player1HitIconImg.src = player1HitIcon;
                    e.target.appendChild(player1HitIconImg);
                    if(noOfShipsSunk === 10){
                        guideText.textContent = 'Player 2 has won!';
                        isGameOver = true;
                        return;
                    }
                    player1Turn = true;
                    player2Turn = false;
                    guideText.textContent = `Player 1's trun`;
                } else {
                    const targetCoordinates = e.target.dataset.coordinates;
                    try {
                        player1.wholeGameboardInstance.receiveAttack(targetCoordinates);
                    } catch {
                        setTimeout( playComputerTurn, 1000);
                        return;
                    }
                    const player1MissIconImg = new Image();
                    player1MissIconImg.src = player1MissIcon;
                    e.target.appendChild(player1MissIconImg);
                    player1Turn = true;
                    player2Turn = false;
                    guideText.textContent = `Player 1's trun`;
                }
            } else if (player1Turn && e.target.closest('.player2-grid')){
                const targetCoordinates = JSON.parse(e.target.closest('.gameboard-cell').dataset.coordinates);
                try {
                    player2.wholeGameboardInstance.receiveAttack(targetCoordinates);
                } catch (error) {
                    errorText.textContent = error;
                    return;
                }
                const isHit = player2.wholeGameboardInstance.hitShots.some((coordinates)=>{
                    return coordinates === targetCoordinates;
                })
                if(isHit){
                    const player2Ships = player2.wholeGameboardInstance.ships;
                    let noOfShipsSunk = 0;
                    player2Ships.forEach((ship)=>{
                        if(ship.isSunk){
                            noOfShipsSunk++;
                        }
                    })
                    const player2Score = document.querySelector('.player2-score');
                    player2Score.textContent = noOfShipsSunk;
                    const player2HitIconImg = new Image();
                    player2HitIconImg.src = player2HitIcon;
                    e.target.appendChild(player2HitIconImg);
                    if(noOfShipsSunk === 10){
                        guideText.textContent = 'Player 1 has won!';
                        isGameOver = true;
                        return;
                    }
                } else{
                    const player2MissIconImg = new Image();
                    player2MissIconImg.src = player2MissIcon;
                    e.target.appendChild(player2MissIconImg);
                }
                player1Turn = false;
                player2Turn = true;
                guideText.textContent = `Player 2's trun`;
                setTimeout( playComputerTurn, 1000);
            }   
        }
    }


})