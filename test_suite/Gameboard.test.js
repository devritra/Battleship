/* eslint-disable no-sparse-arrays */
import { test } from "@jest/globals";
import { expect } from "@jest/globals";
import { Gameboard } from "../src/Gameboard";

test('Place the carrier starting from (9,5) to the right', ()=>{
    const gameboard = new Gameboard();
    gameboard.placeCarrier([9,5],'right');
    expect(gameboard.grid).toEqual(
        [
            [,,,,,,,,,],
            [,,,,,,,,,],
            [,,,,,,,,,],
            [,,,,,,,,,],
            [,,,,,,,,,],
            [,,,,,,,,,],
            [,,,,,,,,,],
            [,,,,,,,,,],
            [,,,,,,,,,],
            [,,,,,'c','c','c','c','c']        
        ]
    )
})
test('Place the carrier starting from (9,0) to the up', ()=>{
    const gameboard = new Gameboard();
    gameboard.placeCarrier([9,0],'up');
    expect(gameboard.grid).toEqual(
        [
            [,,,,,,,,,],
            [,,,,,,,,,],
            [,,,,,,,,,],
            [,,,,,,,,,],
            [,,,,,,,,,],
            ['c',,,,,,,,,],
            ['c',,,,,,,,,],
            ['c',,,,,,,,,],
            ['c',,,,,,,,,],
            ['c',,,,,,,,,]
        ]
    )
})
test('Place the carrier starting from (1,2) to the down', ()=>{
    const gameboard = new Gameboard();
    gameboard.placeCarrier([1,2],'down');
    expect(gameboard.grid).toEqual(
        [
            [,,,,,,,,,],
            [,,'c',,,,,,,],
            [,,'c',,,,,,,],
            [,,'c',,,,,,,],
            [,,'c',,,,,,,],
            [,,'c',,,,,,,],
            [,,,,,,,,,],
            [,,,,,,,,,],
            [,,,,,,,,,],
            [,,,,,,,,,]
        ]
    )
})
test('Place the carrier starting from (3,8) to the left', ()=>{
    const gameboard = new Gameboard();
    gameboard.placeCarrier([3,8],'left');
    expect(gameboard.grid).toEqual(
        [
            [,,,,,,,,,],
            [,,,,,,,,,],
            [,,,,,,,,,],
            [,,,,'c','c','c','c','c',],
            [,,,,,,,,,],
            [,,,,,,,,,],
            [,,,,,,,,,],
            [,,,,,,,,,],
            [,,,,,,,,,],
            [,,,,,,,,,]
        ]
    )
})
test('Place the battleship starting from (6,1) to the right', ()=>{
    const gameboard = new Gameboard();
    gameboard.placeBattleship([9,5],'right');
    expect(gameboard.grid).toEqual(
        [
            [,,,,,,,,,],
            [,,,,,,,,,],
            [,,,,,,,,,],
            [,,,,,,,,,],
            [,,,,,,,,,],
            [,,,,,,,,,],
            [,,,,,,,,,],
            [,,,,,,,,,],
            [,,,,,,,,,],
            [,,,,,'b','b','b','b',]        
        ]
    )
})
test('Place the battleship starting from (1,1) to the up', ()=>{
    const gameboard = new Gameboard();
    gameboard.placeBattleship([9,0],'up');
    expect(gameboard.grid).toEqual(
        [
            [,,,,,,,,,],
            [,,,,,,,,,],
            [,,,,,,,,,],
            [,,,,,,,,,],
            [,,,,,,,,,],
            [,,,,,,,,,],
            ['b',,,,,,,,,],
            ['b',,,,,,,,,],
            ['b',,,,,,,,,],
            ['b',,,,,,,,,]
        ]
    )
})
test('Place the destroyer starting from (6,1) to the right', ()=>{
    const gameboard = new Gameboard();
    gameboard.placeDestroyer([9,5],'right');
    expect(gameboard.grid).toEqual(
        [
            [,,,,,,,,,],
            [,,,,,,,,,],
            [,,,,,,,,,],
            [,,,,,,,,,],
            [,,,,,,,,,],
            [,,,,,,,,,],
            [,,,,,,,,,],
            [,,,,,,,,,],
            [,,,,,,,,,],
            [,,,,,'d','d','d',,]        
        ]
    )
})
test('Place the destroyer starting from (1,1) to the up', ()=>{
    const gameboard = new Gameboard();
    gameboard.placeDestroyer([9,0],'up');
    expect(gameboard.grid).toEqual(
        [
            [,,,,,,,,,],
            [,,,,,,,,,],
            [,,,,,,,,,],
            [,,,,,,,,,],
            [,,,,,,,,,],
            [,,,,,,,,,],
            [,,,,,,,,,],
            ['d',,,,,,,,,],
            ['d',,,,,,,,,],
            ['d',,,,,,,,,]
        ]
    )
})
test('Place the submarine starting from (6,1) to the right', ()=>{
    const gameboard = new Gameboard();
    gameboard.placeSubmarine([9,5],'right');
    expect(gameboard.grid).toEqual(
        [
            [,,,,,,,,,],
            [,,,,,,,,,],
            [,,,,,,,,,],
            [,,,,,,,,,],
            [,,,,,,,,,],
            [,,,,,,,,,],
            [,,,,,,,,,],
            [,,,,,,,,,],
            [,,,,,,,,,],
            [,,,,,'s','s','s',,]        
        ]
    )
})
test('Place the submarine starting from (1,1) to the up', ()=>{
    const gameboard = new Gameboard();
    gameboard.placeSubmarine([9,0],'up');
    expect(gameboard.grid).toEqual(
        [
            [,,,,,,,,,],
            [,,,,,,,,,],
            [,,,,,,,,,],
            [,,,,,,,,,],
            [,,,,,,,,,],
            [,,,,,,,,,],
            [,,,,,,,,,],
            ['s',,,,,,,,,],
            ['s',,,,,,,,,],
            ['s',,,,,,,,,]
        ]
    )
})
test('Place the patrol boat starting from (6,1) to the right', ()=>{
    const gameboard = new Gameboard();
    gameboard.placePatrolBoat([9,5],'right');
    expect(gameboard.grid).toEqual(
        [
            [,,,,,,,,,],
            [,,,,,,,,,],
            [,,,,,,,,,],
            [,,,,,,,,,],
            [,,,,,,,,,],
            [,,,,,,,,,],
            [,,,,,,,,,],
            [,,,,,,,,,],
            [,,,,,,,,,],
            [,,,,,'p','p',,,]        
        ]
    )
})
test('Place the patrol boat starting from (1,1) to the up', ()=>{
    const gameboard = new Gameboard();
    gameboard.placePatrolBoat([9,0],'up');
    expect(gameboard.grid).toEqual(
        [
            [,,,,,,,,,],
            [,,,,,,,,,],
            [,,,,,,,,,],
            [,,,,,,,,,],
            [,,,,,,,,,],
            [,,,,,,,,,],
            [,,,,,,,,,],
            [,,,,,,,,,],
            ['p',,,,,,,,,],
            ['p',,,,,,,,,]
        ]
    )
})
test('Check if the placement methods throws errors correctly', ()=>{
    const gameboard = new Gameboard();
    gameboard.placePatrolBoat([9,0],'up');
    expect(()=>{
        gameboard.placeCarrier([8,0],'right');
    }).toThrow('Coordinate already occupied by another ship');
    expect(gameboard.grid).toEqual(
        [
            [,,,,,,,,,],
            [,,,,,,,,,],
            [,,,,,,,,,],
            [,,,,,,,,,],
            [,,,,,,,,,],
            [,,,,,,,,,],
            [,,,,,,,,,],
            [,,,,,,,,,],
            ['p',,,,,,,,,],
            ['p',,,,,,,,,]
        ]
    )
})
test.skip('Test the receiveAttack method (1)', ()=>{
    const gameboard = new Gameboard();
    gameboard.placeCarrier([9,5],'right');
    gameboard.receiveAttack([9,9]);
    expect(gameboard.hitShots).toEqual([[9,9]]);
    gameboard.receiveAttack([8,9]);
    expect(gameboard.missedShots).toEqual([[8,9]]);
    expect(gameboard.grid).toEqual(
        [
            [,,,,,,,,,],
            [,,,,,,,,,],
            [,,,,,,,,,],
            [,,,,,,,,,],
            [,,,,,,,,,],
            [,,,,,,,,,],
            [,,,,,,,,,],
            [,,,,,,,,,],
            [,,,,,,,,,'m'],
            [,,,,,'c','c','c','c','h']        
        ]
    )
})
test.skip('Test the receiveAttack method (2)', ()=>{
    const gameboard = new Gameboard();
    gameboard.placeDestroyer([1,1],'up');
    gameboard.receiveAttack([1,2]);
    expect(gameboard.hitShots).toEqual([[1,2]]);
    gameboard.receiveAttack([1,5]);
    expect(gameboard.missedShots).toEqual([[1,5]]);
    expect(gameboard.grid).toEqual(
        [
            [,,,,,,,,,],
            [,,,,,,,,,],
            [,,,,,,,,,],
            [,,,,,,,,,],
            [,,,,,,,,,],
            [,,,,,,,,,],
            [,,,,,,,,,],
            ['d',,,,,,,,,],
            ['d',,,,,,,,,],
            ['d',,,,,,,,,]
        ]
    )
})