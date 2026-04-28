export class shipClass{
    constructor(){
        this.length = undefined;
        this.type = undefined;
        this.hitCount = 0;
        this.isSunk = false;
        this.shipId = crypto.randomUUID();
        this.shipCoordinates = [];
        this.startingPosition = undefined;
        this.directionFromStartingPosition = undefined;
    }

    hit(){
        this.hitCount++;
    }
    checkIfSunk(){
        if(this.hitCount === this.length){
            this.isSunk = true;
        } else if(this.hitCount < this.length){
            this.isSunk = false;
        }
    }
}