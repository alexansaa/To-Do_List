import Activities from './src/activities.js';
import init from './localstorageMock.js';
describe("Activities", () => {
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