export class shipClass{
    constructor(){
        this.length = undefined;
        this.hitCount = 0;
        this.isSunk = false;
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