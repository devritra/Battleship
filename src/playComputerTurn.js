export function playComputerTurn(){
    const randomCoordinates = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
    const player1Grid = document.querySelector('.player1-grid');
    const shipCells = document.querySelectorAll('.ship-cell');
    const player1GridCells = Array.from(player1Grid.childNodes);
    const clickEvent = new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: true,
    });

    shipCells.forEach((shipCell)=>{
        const gridCellIndex = player1GridCells.findIndex((gridCell)=>{
            return shipCell.dataset.coordinates === gridCell.dataset.coordinates;
        })
        player1GridCells.splice(gridCellIndex, 0, shipCell);
    })
    player1GridCells.forEach((cell)=>{
        if(cell.dataset.coordinates === JSON.stringify(randomCoordinates)){
            cell.dispatchEvent(clickEvent);
        }
    })
}