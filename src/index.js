import './style.css';
import { loadGame } from './loadGame';
import { Player } from './Player';
const startGameBtn = document.querySelector('.start-game-btn');
startGameBtn.addEventListener('click',()=>{
    const player1 = new Player('human');
    const player2 = new Player('computer');
    loadGame(player1, player2);
})