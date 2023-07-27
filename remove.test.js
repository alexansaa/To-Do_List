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

describe('Activities', () => {
  test('Add 2 objects and remove 1 object of the array', () => {
    // Arrange
    Activities.addNewActivitie('Activity 1', true);
    Activities.addNewActivitie('Activity 2', true);
    // Act
    Activities.removeActivite(1);
    // Assert
    expect(Activities.activities.length).toBe(1);
    expect(Activities.activities[0].description).toBe('Activity 2');
  });

  test('Add 2 objects and remove 1 object of the array', () => {
    // Arrange
    Activities.addNewActivitie('Activity 4', true);
    Activities.addNewActivitie('Activity 5', false);
    Activities.addNewActivitie('Activity 6', true);
    // Act
    Activities.removeActivite(1);
    // Assert
    expect(Activities.activities.length).toBe(3);
    expect(Activities.activities[0].description).toBe('Activity 4');
  });

  test('remove 1 object of the array', () => {
    // Act
    Activities.removeActivite(1);
    // Assert
    expect(Activities.activities.length).toBe(2);
    expect(Activities.activities[0].description).toBe('Activity 5');
  });
});