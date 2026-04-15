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