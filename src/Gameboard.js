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

    placeCarrierOnGrid(ship, coordinates, direction){
        switch (direction) {
            case 'up':
                for(let i = coordinates[0]; i > (coordinates[0] - ship.length); i--){
                    this.grid[i][coordinates[1]] = 'c';
                }
                break;
            case 'right':
                for(let i = coordinates[1]; i < (ship.length + coordinates[1]); i++){
                    this.grid[coordinates[0]][i] = 'c';
                }
                break;
            case 'down':
                for(let i = coordinates[0]; i < (ship.length + coordinates[0]); i++){
                    this.grid[i][coordinates[1]] = 'c';
                }
                break;
            case 'left':
                for(let i = coordinates[1]; i > (coordinates[1] - ship.length); i--){
                    this.grid[coordinates[0]][i] = 'c';
                }
                break;
            default:
                break;
        }
    }
    placeBattleshipOnGrid(ship, coordinates, direction){
        switch (direction) {
            case 'up':
                for(let i = coordinates[0]; i > (coordinates[0] - ship.length); i--){
                    this.grid[i][coordinates[1]] = 'b';
                }
                break;
            case 'right':
                for(let i = coordinates[1]; i < (ship.length + coordinates[1]); i++){
                    this.grid[coordinates[0]][i] = 'b';
                }
                break;
            case 'down':
                for(let i = coordinates[0]; i < (ship.length + coordinates[0]); i++){
                    this.grid[i][coordinates[1]] = 'b';
                }
                break;
            case 'left':
                for(let i = coordinates[1]; i > (coordinates[1] - ship.length); i--){
                    this.grid[i][coordinates[1]] = 'b';
                }
                break;
            default:
                break;
        }
    }
    placeDestroyerOnGrid(ship, coordinates, direction){
        switch (direction) {
            case 'up':
                for(let i = coordinates[0]; i > (coordinates[0] - ship.length); i--){
                    this.grid[i][coordinates[1]] = 'd';
                }
                break;
            case 'right':
                for(let i = coordinates[1]; i < (ship.length + coordinates[1]); i++){
                    this.grid[coordinates[0]][i] = 'd';
                }
                break;
            case 'down':
                for(let i = coordinates[0]; i < (ship.length + coordinates[0]); i++){
                    this.grid[i][coordinates[1]] = 'd';
                }
                break;
            case 'left':
                for(let i = coordinates[1]; i > (coordinates[1] - ship.length); i--){
                    this.grid[i][coordinates[1]] = 'd';
                }
                break;
            default:
                break;
        }
    }
    placeSubmarineOnGrid(ship, coordinates, direction){
        switch (direction) {
            case 'up':
                for(let i = coordinates[0]; i > (coordinates[0] - ship.length); i--){
                    this.grid[i][coordinates[1]] = 's';
                }
                break;
            case 'right':
                for(let i = coordinates[1]; i < (ship.length + coordinates[1]); i++){
                    this.grid[coordinates[0]][i] = 's';
                }
                break;
            case 'down':
                for(let i = coordinates[0]; i < (ship.length + coordinates[0]); i++){
                    this.grid[i][coordinates[1]] = 's';
                }
                break;
            case 'left':
                for(let i = coordinates[1]; i > (coordinates[1] - ship.length); i--){
                    this.grid[i][coordinates[1]] = 's';
                }
                break;
            default:
                break;
        }
    }
    placePatrolBoatOnGrid(ship, coordinates, direction){
        switch (direction) {
            case 'up':
                for(let i = coordinates[0]; i > (coordinates[0] - ship.length); i--){
                    this.grid[i][coordinates[1]] = 'p';
                }
                break;
            case 'right':
                for(let i = coordinates[1]; i < (ship.length + coordinates[1]); i++){
                    this.grid[coordinates[0]][i] = 'p';
                }
                break;
            case 'down':
                for(let i = coordinates[0]; i < (ship.length + coordinates[0]); i++){
                    this.grid[i][coordinates[1]] = 'p';
                }
                break;
            case 'left':
                for(let i = coordinates[1]; i > (coordinates[1] - ship.length); i--){
                    this.grid[i][coordinates[1]] = 'p';
                }
                break;
            default:
                break;
        }
    }
    placeShipOnGrid(ship, coordinates, direction){
        switch (ship.type) {
            case 'carrier':
                this.placeCarrierOnGrid(ship, coordinates, direction);
                break;
            case 'battleship':
                this.placeBattleshipOnGrid(ship, coordinates, direction);
                break;
            case 'destroyer':
                this.placeDestroyerOnGrid(ship, coordinates, direction);
                break;
            case 'submarine':
                this.placeSubmarineOnGrid(ship, coordinates, direction);
                break;
            case 'patrol boat':
                this.placePatrolBoatOnGrid(ship, coordinates, direction);
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