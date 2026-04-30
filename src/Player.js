import { Gameboard } from "../src/Gameboard";

export class Player{
    wholeGameboardInstance = this.initGameboard();
    constructor(type){
        this.type = type;
        this.gameboardGrid = this.wholeGameboardInstance.grid;
    }

    initGameboard(){
        const gameboard = new Gameboard();
        gameboard.placeCarrier([9,5],'right');
        gameboard.placeBattleship([5,1],'down');
        gameboard.placeBattleship([3,5],'right');
        gameboard.placeDestroyer([7,7],'right');
        gameboard.placeSubmarine([2,1],'right');
        gameboard.placeSubmarine([5,4],'down');
        gameboard.placePatrolBoat([0,0],'right')
        gameboard.placePatrolBoat([0,7],'right')
        gameboard.placePatrolBoat([0,5],'down')
        gameboard.placePatrolBoat([5,6],'down');
        gameboard.getTheGrid();
        return gameboard;
    }

//     getRandomCoordinates(){
//         return [Math.random() * 10, Math.random() * 10]
//     }
//     getRandomDirections(){
//         const key = Math.floor(Math.random() * 4);
//         switch (key) {
//             case 0:
//                 return 'up'
//             case 1:
//                 return 'right'
//             case 2:
//                 return 'down'
//             case 3:
//                 return 'left'
//             default:
//                 break;
//         }
//     }
//     randomizeGameboard(){
//         const gameboard = new Gameboard();
//         gameboard.placeCarrier(this.getRandomCoordinates(),this.getRandomDirections());
//         gameboard.placeBattleship(this.getRandomCoordinates(),this.getRandomDirections());
//         gameboard.placeBattleship(this.getRandomCoordinates(),this.getRandomDirections());
//         gameboard.placeDestroyer(this.getRandomCoordinates(),this.getRandomDirections());
//         gameboard.placeSubmarine(this.getRandomCoordinates(),this.getRandomDirections());
//         gameboard.placeSubmarine(this.getRandomCoordinates(),this.getRandomDirections());
//         gameboard.placePatrolBoat(this.getRandomCoordinates(),this.getRandomDirections())
//         gameboard.placePatrolBoat(this.getRandomCoordinates(),this.getRandomDirections())
//         gameboard.placePatrolBoat(this.getRandomCoordinates(),this.getRandomDirections())
//         gameboard.placePatrolBoat(this.getRandomCoordinates(),this.getRandomDirections());
//         gameboard.getTheGrid();
//         this.wholeGameboardInstance = gameboard;
//         return;
//     }
}