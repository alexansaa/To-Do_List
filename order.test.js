import { describe, expect, test } from '@jest/globals';
import Activities from './src/activities.js';

// Creating a mock for localStorage
const localStorageMock = (() => {
  let store = {};
  return {
    getItem: (key) => store[key] || null,
    setItem: (key, value) => {
      store[key] = value.toString();
    },
    removeItem: (key) => {
      delete store[key];
    },
    clear: () => {
      store = {};
    },
  };
})();

// Mock localStorage in the Activities class
Object.defineProperty(global, 'localStorage', {
  value: localStorageMock,
});

describe('Activities reorder functionality', () => {
  // test reorder items method
  test('defines reorder()', () => {
    // Assert
    expect(typeof Activities.reorder).toBe('function');
  });

  // test reordering item method
  test('correctly reordering items', () => {
    // Arrange
    const act1Desc = 'Activity 1';
    const act1Comp = true;
    const act1Indx = 1;
    const act2Desc = 'Activity 2';
    const act2Comp = true;
    const act2Indx = 3;
    const act3Desc = 'Activity 3';
    const act3Comp = true;
    const act3Indx = 2;
    Activities.addNewActivitie(act1Desc, act1Comp, act1Indx);
    Activities.addNewActivitie(act2Desc, act2Comp, act2Indx);
    Activities.addNewActivitie(act3Desc, act3Comp, act3Indx);
    // Act
    Activities.reorder();
    // Assert
    expect(Activities.activities.length).toBe(3);
    expect(typeof Activities.activities[0]).toBe('object');
    expect(typeof Activities.activities[1]).toBe('object');
    expect(typeof Activities.activities[2]).toBe('object');
    expect(Activities.activities[0].index).toBe(1);
    expect(Activities.activities[1].index).toBe(2);
    expect(Activities.activities[2].index).toBe(3);
    expect(Activities.activities[0].description).toBe('Activity 1');
    expect(Activities.activities[1].description).toBe('Activity 2');
    expect(Activities.activities[2].description).toBe('Activity 3');
    expect(Activities.activities[0].completed).toBeTruthy();
    expect(Activities.activities[1].completed).toBeTruthy();
    expect(Activities.activities[2].completed).toBeTruthy();
  });
});