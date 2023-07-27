import {describe, expect, test} from '@jest/globals';
import Activities from "./src/activities";
import { localstorageMock } from './localstorageMock';
const ActivitiesObj = require("./src/activities");

describe("Activities add functionality", () => {
  // test constructor overload (description, complete)
  test("defines addNewActivitie(overload1)", () => {
    // Arrange
    const myDescription = "activity description";
    const myComplete = true;
    // Act
    const myAct = new Activities(myDescription,myComplete);
    // Assert
    expect(myAct.description).toBe("activity description");
    expect(myAct.completed).toBeTruthy();
  });

  // test constructor overload (description, complete, index)
  test("defines addNewActivitie(overload2)", () => {
    // Arrange
    const myDescription = "activity description";
    const myComplete = true;
    const myIndex = 1;
    // Act
    const myAct2 = new Activities(myDescription,myComplete,myIndex);
    // Assert
    expect(myAct2.description).toBe("activity description");
    expect(myAct2.completed).toBeTruthy();
    expect(myAct2.index).toBe(1);
  });

  // test add item method
  test("defines add item method", () => {
    // Assert
    expect(typeof Activities.addNewActivitie).toBe("function");
  });

  test("correctly adding new item", () => {
    // Arrange
    const act1Desc = "Activity 1";
    const act1Comp = true;
    // Act
    Activities.addNewActivitie(act1Desc, act1Comp);
    // Assert
    expect(Activities.activities.length).toBe(1);
    expect(typeof Activities.activities[0]).toBe("object");
    expect(Activities.activities[0].description).toBe("Activity 1");
    expect(Activities.activities[0].completed).toBeTruthy();
  });
});