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

describe('Activities status update functionality', () => {
  // test update item method
  test('defines updateActivitie method', () => {
    // Assert
    expect(typeof Activities.updateActivitie).toBe('function');
  });

  // test correctly update item
  test('correctly updating item status', () => {
    // Arrange
    const act1Desc = 'Activity 1';
    const act1Comp = true;
    Activities.addNewActivitie(act1Desc,act1Comp);
    // Act
    expect(Activities.activities.length).toBe(1);
    expect(typeof Activities.activities[0]).toBe('object');
    expect(Activities.activities[0].description).toBe('Activity 1');
    expect(Activities.activities[0].completed).toBeTruthy();
    expect(Activities.activities[0].index).toBe(1);

    Activities.updateActivitie(act1Desc, false, 1);
    // Assert
    expect(Activities.activities.length).toBe(1);
    expect(typeof Activities.activities[0]).toBe('object');
    expect(Activities.activities[0].description).toBe(act1Desc);
    expect(Activities.activities[0].completed).toBeFalsy();
    expect(Activities.activities[0].index).toBe(1);
  });
});