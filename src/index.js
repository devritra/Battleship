import './style.css';
import { loadGame } from './loadGame';
const startGameBtn = document.querySelector('.start-game-btn');
startGameBtn.addEventListener('click',()=>{
    loadGame();
})