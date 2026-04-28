import './style.css';
import { loadGame } from './loadGame';
import { Player } from './Player';
import { displayShipsOnGrids } from './displayShipsOnGrids';
const startGameBtn = document.querySelector('.start-game-btn');
startGameBtn.addEventListener('click',()=>{
    const player1 = new Player('human');
    // const player2 = new Player('computer');
    loadGame();
    displayShipsOnGrids(player1);
})