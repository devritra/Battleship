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
}