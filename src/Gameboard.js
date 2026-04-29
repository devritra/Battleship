import { shipClass } from './shipClass';
export class Gameboard {
    constructor() {
        this.grid = (function () {
            const arr = new Array(10);
            for (let i = 0; i < arr.length; i++) {
                arr[i] = new Array(10);
            }
            return arr;
        })();
        this.ships = [];
        this.hitShots = [];
        this.missedShots = [];
        this.attackedCoordinates = [];
    }

    placeShipOnGrid(ship, coordinates, direction) {
        const maxCoordinate = this.grid.length;
        switch (direction) {
            case 'up':
                if (ship.length > coordinates[0] + 1) {
                    throw new Error('Not enough space');
                }
                for (
                    let i = coordinates[0];
                    i > coordinates[0] - ship.length;
                    i--
                ) {
                    if (this.ships.length < 1) {
                        ship.shipCoordinates.push([i, coordinates[1]]);
                    } else {
                        for (let j = 0; j < this.ships.length; j++) {
                            let isValid = this.ships[
                                j
                            ].shipCoordinates.some((coordinate) => {
                                return (
                                    JSON.stringify(coordinate) ===
                                    JSON.stringify([i, coordinates[1]])
                                );
                            });
                            if (isValid) {
                                throw new Error(
                                    'Coordinate already occupied by another ship'
                                );
                            } else {
                                ship.shipCoordinates.push([i, coordinates[1]]);
                            }
                        }
                    }
                }
                break;
            case 'right':
                if (ship.length > maxCoordinate - coordinates[1]) {
                    throw new Error('Not enough space');
                }
                for (
                    let i = coordinates[1];
                    i < ship.length + coordinates[1];
                    i++
                ) {
                    if (this.ships.length < 1) {
                        ship.shipCoordinates.push([coordinates[0], i]);
                    } else {
                        for (let j = 0; j < this.ships.length; j++) {
                            let isValid = this.ships[
                                j
                            ].shipCoordinates.some((coordinate) => {
                                return (
                                    JSON.stringify(coordinate) ===
                                    JSON.stringify([coordinates[0], i])
                                );
                            });
                            if (isValid) {
                                throw new Error(
                                    'Coordinate already occupied by another ship'
                                );
                            } else {
                                ship.shipCoordinates.push([coordinates[0], i]);
                            }
                        }
                    }
                }
                break;
            case 'down':
                if (ship.length > maxCoordinate - coordinates[0]) {
                    throw new Error('Not enough space');
                }
                for (
                    let i = coordinates[0];
                    i < ship.length + coordinates[0];
                    i++
                ) {
                    if (this.ships.length < 1) {
                        ship.shipCoordinates.push([i, coordinates[1]]);
                    } else {
                        for (let j = 0; j < this.ships.length; j++) {
                            let isValid = this.ships[
                                j
                            ].shipCoordinates.some((coordinate) => {
                                return (
                                    JSON.stringify(coordinate) ===
                                    JSON.stringify([i, coordinates[1]])
                                );
                            });
                            if (isValid) {
                                throw new Error(
                                    'Coordinate already occupied by another ship'
                                );
                            } else {
                                ship.shipCoordinates.push([i, coordinates[1]]);
                            }
                        }
                    }
                }
                break;
            case 'left':
                if (ship.length > coordinates[1] + 1) {
                    throw new Error('Not enough space');
                }
                for (
                    let i = coordinates[1];
                    i > coordinates[1] - ship.length;
                    i--
                ) {
                    if (this.ships.length < 1) {
                        ship.shipCoordinates.push([coordinates[0], i]);
                    } else {
                        for (let j = 0; j < this.ships.length; j++) {
                            let isValid = this.ships[
                                j
                            ].shipCoordinates.some((coordinate) => {
                                return (
                                    JSON.stringify(coordinate) ===
                                    JSON.stringify([coordinates[0], i])
                                );
                            });
                            if (isValid) {
                                throw new Error(
                                    'Coordinate already occupied by another ship'
                                );
                            } else {
                                ship.shipCoordinates.push([coordinates[0], i]);
                            }
                        }
                    }
                }
                break;
            default:
                break;
        }
    }
    moveShip(shipId, coordinates, direction){
        const targetShipIndex = this.ships.findIndex((ship)=>{
            return ship.shipId === shipId;
        });
        const targetShipType = this.ships[targetShipIndex].type;
        if(targetShipType === 'patrol boat'){
            let divided = targetShipType.split(' ');
            let temp1 = divided[0].split('');
            let temp2 = divided[1].split('');
            temp1[0] = divided[0].charAt(0).toUpperCase();
            temp2[0] = divided[1].charAt(0).toUpperCase();
            const temp1Capitalized = temp1.join('');
            const temp2Capitalized = temp2.join('');
            const targetShipTypeFirstLetterCapitalised = `${temp1Capitalized}${temp2Capitalized}`;
            this.ships.splice(targetShipIndex, 1);
            this[`place${targetShipTypeFirstLetterCapitalised}`](coordinates, direction);
            return;
        }
        let temp = targetShipType.split('');
        temp[0] = targetShipType.charAt(0).toUpperCase();
        const targetShipTypeFirstLetterCapitalised = temp.join('');
        this.ships.splice(targetShipIndex, 1);
        this[`place${targetShipTypeFirstLetterCapitalised}`](coordinates, direction);
    }
    getTheGrid(){
        const grid = new Array(10);
        for (let i = 0; i < grid.length; i++) {
            grid[i] = new Array(10);
        }
        this.ships.forEach(ship => {
            ship.shipCoordinates.forEach(coordinate => {
                switch (ship.type) {
                    case 'carrier':
                        grid[coordinate[0]][coordinate[1]] = 'c';        
                        break;
                    case 'battleship':
                        grid[coordinate[0]][coordinate[1]] = 'b';
                        break;
                    case 'destroyer':
                        grid[coordinate[0]][coordinate[1]] = 'd';        
                        break;
                    case 'submarine':
                        grid[coordinate[0]][coordinate[1]] = 's';        
                        break;
                    case 'patrol boat':
                        grid[coordinate[0]][coordinate[1]] = 'p';        
                        break;
                    default:
                        break;
                }
            });
        });
        this.hitShots.forEach(coordinate => {
            grid[coordinate[0]][coordinate[1]] = 'h';
        });
        this.missedShots.forEach(coordinate => {
            grid[coordinate[0]][coordinate[1]] = 'm';
        });
        return grid;
    }
    carrier() {
        const carrier = new shipClass();
        carrier.length = 5;
        carrier.type = 'carrier';
        return carrier;
    }
    battleship() {
        const battleship = new shipClass();
        battleship.length = 4;
        battleship.type = 'battleship';
        return battleship;
    }
    destroyer() {
        const destroyer = new shipClass();
        destroyer.length = 3;
        destroyer.type = 'destroyer';
        return destroyer;
    }
    submarine() {
        const submarine = new shipClass();
        submarine.length = 3;
        submarine.type = 'submarine';
        return submarine;
    }
    patrolBoat() {
        const patrolBoat = new shipClass();
        patrolBoat.length = 2;
        patrolBoat.type = 'patrol boat';
        return patrolBoat;
    }
    placeCarrier(coordinates, direction) {
        const carrier = this.carrier();
        carrier.startingPosition = coordinates;
        carrier.directionFromStartingPosition = direction;
        this.placeShipOnGrid(carrier, coordinates, direction);
        this.ships.push(carrier);
    }
    placeBattleship(coordinates, direction) {
        const battleship = this.battleship();
        battleship.startingPosition = coordinates;
        battleship.directionFromStartingPosition = direction;
        this.placeShipOnGrid(battleship, coordinates, direction);
        this.ships.push(battleship);
    }
    placeDestroyer(coordinates, direction) {
        const destroyer = this.destroyer();
        destroyer.startingPosition = coordinates;
        destroyer.directionFromStartingPosition = direction;
        this.placeShipOnGrid(destroyer, coordinates, direction);
        this.ships.push(destroyer);
    }
    placeSubmarine(coordinates, direction) {
        const submarine = this.submarine();
        submarine.startingPosition = coordinates;
        submarine.directionFromStartingPosition = direction;
        this.placeShipOnGrid(submarine, coordinates, direction);
        this.ships.push(submarine);
    }
    placePatrolBoat(coordinates, direction) {
        const patrolBoat = this.patrolBoat();
        patrolBoat.startingPosition = coordinates;
        patrolBoat.directionFromStartingPosition = direction;
        this.placeShipOnGrid(patrolBoat, coordinates, direction);
        this.ships.push(patrolBoat);
    }

    receiveAttack(coordinates) {
        let isAlreadyAttacked = this.attackedCoordinates.some((coordinate) => {
            return JSON.stringify(coordinates) === JSON.stringify(coordinate);
        });
        if (isAlreadyAttacked) {
            throw new Error('Invalid attack');
        }
        let isHit;
        for (let i = 0; i < this.ships.length; i++) {
            isHit = this.ships[i].shipCoordinates.some((coordinate) => {
                return (
                    JSON.stringify(coordinates) === JSON.stringify(coordinate)
                );
            });
            if (isHit) {
                this.hitShots.push(coordinates);
                this.ships[i].hit();
                this.ships[i].checkIfSunk();
                this.attackedCoordinates.push(coordinates);
                break;
            }
        }
        if (!isHit) {
            this.missedShots.push(coordinates);
            this.attackedCoordinates.push(coordinates);
        }
        return;
    }
}
