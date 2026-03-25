import { test } from "@jest/globals";
import { expect } from "@jest/globals";

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
test('check if the isSunk method works',()=>{
    const ship = new shipClass();
    ship.length = 2;
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBeTruthy();

    ship.length = 2;
    ship.hit();
    expect(ship.isSunk()).toBeFalsy();
})