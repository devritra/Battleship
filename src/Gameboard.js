import { shipClass } from './shipClass';
export class Gameboard{
    constructor(){
        this.grid = (function(){
            const arr = new Array(10);
            for(let i = 0; i<arr.length; i++){
                arr[i] = new Array(10);
            }
            return arr;
        })();
        this.ships = [];
    }

    placeShipOnGrid(ship, coordinates, direction){
        switch (direction) {
            case 'up':
                for(let i = coordinates[0]; i > (coordinates[0] - ship.length); i--){
                    switch (ship.type) {
                        case 'carrier':
                            this.grid[i][coordinates[1]] = 'c';
                            break;
                        case 'battleship':
                            this.grid[i][coordinates[1]] = 'b';
                            break;
                        case 'destroyer':
                            this.grid[i][coordinates[1]] = 'd';
                            break;
                        case 'submarine':
                            this.grid[i][coordinates[1]] = 's';
                            break;
                        case 'patrol boat':
                            this.grid[i][coordinates[1]] = 'p';
                            break;
                        default:
                            break;
                    }
                    ship.shipCoordinates.push([i,coordinates[1]]);
                }
                break;
            case 'right':
                for(let i = coordinates[1]; i < (ship.length + coordinates[1]); i++){
                    switch (ship.type) {
                        case 'carrier':
                            this.grid[coordinates[0]][i] = 'c';
                            break;
                        case 'battleship':
                            this.grid[coordinates[0]][i] = 'b';
                            break;
                        case 'destroyer':
                            this.grid[coordinates[0]][i] = 'd';
                            break;
                        case 'submarine':
                            this.grid[coordinates[0]][i] = 's';
                            break;
                        case 'patrol boat':
                            this.grid[coordinates[0]][i] = 'p';
                            break;
                        default:
                            break;
                    }
                    ship.shipCoordinates.push([coordinates[0],i]);
                }
                break;
            case 'down':
                for(let i = coordinates[0]; i < (ship.length + coordinates[0]); i++){
                    switch (ship.type) {
                        case 'carrier':
                            this.grid[i][coordinates[1]] = 'c';
                            break;
                        case 'battleship':
                            this.grid[i][coordinates[1]] = 'b';
                            break;
                        case 'destroyer':
                            this.grid[i][coordinates[1]] = 'd';
                            break;
                        case 'submarine':
                            this.grid[i][coordinates[1]] = 's';
                            break;
                        case 'patrol boat':
                            this.grid[i][coordinates[1]] = 'p';
                            break;
                        default:
                            break;
                    }
                    ship.shipCoordinates.push([i,coordinates[1]]);
                }
                break;
            case 'left':
                for(let i = coordinates[1]; i > (coordinates[1] - ship.length); i--){
                    switch (ship.type) {
                        case 'carrier':
                            this.grid[coordinates[0]][i] = 'c';
                            break;
                        case 'battleship':
                            this.grid[coordinates[0]][i] = 'b';
                            break;
                        case 'destroyer':
                            this.grid[coordinates[0]][i] = 'd';
                            break;
                        case 'submarine':
                            this.grid[coordinates[0]][i] = 's';
                            break;
                        case 'patrol boat':
                            this.grid[coordinates[0]][i] = 'p';
                            break;
                        default:
                            break;
                    }
                    ship.shipCoordinates.push([coordinates[0],i]);
                }
                break;
            default:
                break;
        }
    }
    carrier(){
        const carrier = new shipClass();
        carrier.length = 5;
        carrier.type = 'carrier';
        return carrier;
    }
    battleship(){
        const battleship = new shipClass();
        battleship.length = 4;
        battleship.type = 'battleship';
        return battleship;
    }
    destroyer(){
        const destroyer = new shipClass();
        destroyer.length = 3;
        destroyer.type = 'destroyer';
        return destroyer;
    }
    submarine(){
        const submarine = new shipClass();
        submarine.length = 3;
        submarine.type = 'submarine';
        return submarine;
    }
    patrolBoat(){
        const patrolBoat = new shipClass();
        patrolBoat.length = 2;
        patrolBoat.type = 'patrol boat';
        return patrolBoat;
    }
    placeCarrier(coordinates, direction){
        const carrier = this.carrier();
        this.ships.push(carrier);
        this.placeShipOnGrid(carrier, coordinates, direction);
    }
    placeBattleship(coordinates, direction){
        const battleship = this.battleship();
        this.ships.push(battleship);
        this.placeShipOnGrid(battleship, coordinates, direction);
    }
    placeDestroyer(coordinates, direction){
        const destroyer = this.destroyer();
        this.ships.push(destroyer);
        this.placeShipOnGrid(destroyer, coordinates, direction);
    }
    placeSubmarine(coordinates, direction){
        const submarine = this.submarine();
        this.ships.push(submarine);
        this.placeShipOnGrid(submarine, coordinates, direction);
    }
    placePatrolBoat(coordinates, direction){
        const patrolBoat = this.patrolBoat();
        this.ships.push(patrolBoat);
        this.placeShipOnGrid(patrolBoat, coordinates, direction);
    }
}