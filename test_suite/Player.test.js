/* eslint-disable no-sparse-arrays */
import { test } from "@jest/globals";
import { expect } from "@jest/globals";
import { Player } from "../src/Player";

test('Check player types 1', ()=>{
    const player1 = new Player('human');
    expect(player1.type).toBe('human');
})
test('Check player types 2', ()=>{
    const player1 = new Player('Computer');
    expect(player1.type).toBe('Computer');
})
test('Check player types 2', ()=>{
    const player1 = new Player('human');
    expect(player1.gameboard).toEqual(
        [
            ['p','p',,,,'p',,'p','p',],
            [,,,,,'p',,,,],
            [,'s','s','s',,,,,,],
            [,,,,,'b','b','b','b',],
            [,,,,,,,,,],
            [,'b',,,'s',,'p',,,],
            [,'b',,,'s',,'p',,,],
            [,'b',,,'s',,,'d','d','d'],
            [,'b',,,,,,,,],
            [,,,,,'c','c','c','c','c']        
        ]
    )
})