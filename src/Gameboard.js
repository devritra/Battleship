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
                    switch (ship.type) {
                        case 'carrier':
                            if (this.ships.length < 1) {
                                this.grid[i][coordinates[1]] = 'c';
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
                                        this.grid[i][coordinates[1]] = 'c';
                                    }
                                }
                            }
                            break;
                        case 'battleship':
                            if (this.ships.length < 1) {
                                this.grid[i][coordinates[1]] = 'b';
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
                                        this.grid[i][coordinates[1]] = 'b';
                                    }
                                }
                            }
                            break;
                        case 'destroyer':
                            if (this.ships.length < 1) {
                                this.grid[i][coordinates[1]] = 'd';
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
                                        this.grid[i][coordinates[1]] = 'd';
                                    }
                                }
                            }
                            break;
                        case 'submarine':
                            if (this.ships.length < 1) {
                                this.grid[i][coordinates[1]] = 's';
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
                                        this.grid[i][coordinates[1]] = 's';
                                    }
                                }
                            }
                            break;
                        case 'patrol boat':
                            if (this.ships.length < 1) {
                                this.grid[i][coordinates[1]] = 'p';
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
                                        this.grid[i][coordinates[1]] = 'p';
                                    }
                                }
                            }
                            break;
                        default:
                            break;
                    }
                    ship.shipCoordinates.push([i, coordinates[1]]);
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
                    switch (ship.type) {
                        case 'carrier':
                            if (this.ships.length < 1) {
                                this.grid[coordinates[0]][i] = 'c';
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
                                        this.grid[coordinates[0]][i] = 'c';
                                    }
                                }
                            }
                            break;
                        case 'battleship':
                            if (this.ships.length < 1) {
                                this.grid[coordinates[0]][i] = 'b';
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
                                        this.grid[coordinates[0]][i] = 'b';
                                    }
                                }
                            }
                            break;
                        case 'destroyer':
                            if (this.ships.length < 1) {
                                this.grid[coordinates[0]][i] = 'd';
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
                                        this.grid[coordinates[0]][i] = 'd';
                                    }
                                }
                            }
                            break;
                        case 'submarine':
                            if (this.ships.length < 1) {
                                this.grid[coordinates[0]][i] = 's';
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
                                        this.grid[coordinates[0]][i] = 's';
                                    }
                                }
                            }
                            break;
                        case 'patrol boat':
                            if (this.ships.length < 1) {
                                this.grid[coordinates[0]][i] = 'p';
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
                                        this.grid[coordinates[0]][i] = 'p';
                                    }
                                }
                            }
                            break;
                        default:
                            break;
                    }
                    ship.shipCoordinates.push([coordinates[0], i]);
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
                    switch (ship.type) {
                        case 'carrier':
                            if (this.ships.length < 1) {
                                this.grid[i][coordinates[1]] = 'c';
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
                                        this.grid[i][coordinates[1]] = 'c';
                                    }
                                }
                            }
                            break;
                        case 'battleship':
                            if (this.ships.length < 1) {
                                this.grid[i][coordinates[1]] = 'b';
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
                                        this.grid[i][coordinates[1]] = 'b';
                                    }
                                }
                            }
                            break;
                        case 'destroyer':
                            if (this.ships.length < 1) {
                                this.grid[i][coordinates[1]] = 'd';
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
                                        this.grid[i][coordinates[1]] = 'd';
                                    }
                                }
                            }
                            break;
                        case 'submarine':
                            if (this.ships.length < 1) {
                                this.grid[i][coordinates[1]] = 's';
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
                                        this.grid[i][coordinates[1]] = 's';
                                    }
                                }
                            }
                            break;
                        case 'patrol boat':
                            if (this.ships.length < 1) {
                                this.grid[i][coordinates[1]] = 'p';
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
                                        this.grid[i][coordinates[1]] = 'p';
                                    }
                                }
                            }
                            break;
                        default:
                            break;
                    }
                    ship.shipCoordinates.push([i, coordinates[1]]);
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
                    switch (ship.type) {
                        case 'carrier':
                            if (this.ships.length < 1) {
                                this.grid[coordinates[0]][i] = 'c';
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
                                        this.grid[coordinates[0]][i] = 'c';
                                    }
                                }
                            }
                            break;
                        case 'battleship':
                            if (this.ships.length < 1) {
                                this.grid[coordinates[0]][i] = 'b';
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
                                        this.grid[coordinates[0]][i] = 'b';
                                    }
                                }
                            }
                            break;
                        case 'destroyer':
                            if (this.ships.length < 1) {
                                this.grid[coordinates[0]][i] = 'd';
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
                                        this.grid[coordinates[0]][i] = 'd';
                                    }
                                }
                            }
                            break;
                        case 'submarine':
                            if (this.ships.length < 1) {
                                this.grid[coordinates[0]][i] = 's';
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
                                        this.grid[coordinates[0]][i] = 's';
                                    }
                                }
                            }
                            break;
                        case 'patrol boat':
                            if (this.ships.length < 1) {
                                this.grid[coordinates[0]][i] = 'p';
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
                                        this.grid[coordinates[0]][i] = 'p';
                                    }
                                }
                            }
                            break;
                        default:
                            break;
                    }
                    ship.shipCoordinates.push([coordinates[0], i]);
                }
                break;
            default:
                break;
        }
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
                this.grid[coordinates[0]][coordinates[1]] = 'h';
                this.hitShots.push(coordinates);
                this.ships[i].hit();
                this.ships[i].checkIfSunk();
                this.attackedCoordinates.push(coordinates);
                break;
            }
        }
        if (!isHit) {
            this.grid[coordinates[0]][coordinates[1]] = 'm';
            this.missedShots.push(coordinates);
            this.attackedCoordinates.push(coordinates);
        }
        return;
    }
}
