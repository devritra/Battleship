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
    createTheGrid(){
        const arr = new Array(10);
        for (let i = 0; i < arr.length; i++) {
            arr[i] = new Array(10);
        }
        this.ships.forEach(ship => {
            ship.shipCoordinates.forEach(coordinate => {
                switch (ship.type) {
                    case 'carrier':
                        arr[coordinate[0]][coordinate[1]] = 'c';        
                        break;
                    case 'battleship':
                        arr[coordinate[0]][coordinate[1]] = 'b';
                        break;
                    case 'destroyer':
                        arr[coordinate[0]][coordinate[1]] = 'd';        
                        break;
                    case 'submarine':
                        arr[coordinate[0]][coordinate[1]] = 's';        
                        break;
                    case 'patrol boat':
                        arr[coordinate[0]][coordinate[1]] = 'p';        
                        break;
                    default:
                        break;
                }
            });
        });
        this.hitShots.forEach(coordinate => {
            arr[coordinate[0]][coordinate[1]] = 'h';
        });
        this.missedShots.forEach(coordinate => {
            arr[coordinate[0]][coordinate[1]] = 'm';
        });
        this.grid = arr;
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
        this.placeShipOnGrid(carrier, coordinates, direction);
        this.ships.push(carrier);
    }
    placeBattleship(coordinates, direction) {
        const battleship = this.battleship();
        this.placeShipOnGrid(battleship, coordinates, direction);
        this.ships.push(battleship);
    }
    placeDestroyer(coordinates, direction) {
        const destroyer = this.destroyer();
        this.placeShipOnGrid(destroyer, coordinates, direction);
        this.ships.push(destroyer);
    }
    placeSubmarine(coordinates, direction) {
        const submarine = this.submarine();
        this.placeShipOnGrid(submarine, coordinates, direction);
        this.ships.push(submarine);
    }
    placePatrolBoat(coordinates, direction) {
        const patrolBoat = this.patrolBoat();
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
