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
        gameboard.createTheGrid();
        return gameboard;
    }
}