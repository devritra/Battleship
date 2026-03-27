import { test } from "@jest/globals";
import { expect } from "@jest/globals";
import { shipClass } from "../src/shipClass";

test('check if the length property exists',()=>{
    const ship = new shipClass();
    expect(ship).toHaveProperty('length');
})
test('check if the hitCount property works',()=>{
    const ship = new shipClass();
    expect(ship.hitCount).toBe(0);
})
test('check if the isSunk property works',()=>{
    const ship = new shipClass();
    expect(ship.isSunk).toBe(false);
    ship.isSunk = true;
    expect(ship.isSunk).toBeTruthy();
})
test('check if the hit method works',()=>{
    const ship = new shipClass();
    ship.length = 3;
    ship.hit()
    expect(ship.hitCount).toBe(1);
    ship.hit()
    expect(ship.hitCount).toBe(2);
    ship.hit()
    expect(ship.hitCount).toBe(3);
})
test('check if the checkIfSunk method works',()=>{
    const ship = new shipClass();
    ship.length = 2;
    ship.hit();
    ship.hit();
    ship.checkIfSunk();
    expect(ship.isSunk).toBeTruthy();

    const ship2 = new shipClass();
    ship2.length = 2;
    ship2.hit();
    ship2.checkIfSunk();
    expect(ship2.isSunk).toBeFalsy();
})