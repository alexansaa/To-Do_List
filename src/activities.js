export default class Activities {
  static activities = [];

  constructor(description, completed) {
    const newIndex = Activities.activities[Activities.activities.length - 1].index;
    this.description = description;
    this.completed = completed;
    this.index = newIndex;
  }

  static someActivities = [
    {
      description: 'some description',
      completed: false,
      index: 1,
    },
    {
      description: 'some other description',
      completed: true,
      index: 2,
    },
    {
      description: 'a new description',
      completed: true,
      index: 3,
    },
  ];

  static updateData() {
    localStorage.setItem('activities', JSON.stringify(Activities.activities));
  }

  static loadData() {
    Activities.activities = JSON.parse(localStorage.getItem('activities'));
    if (Activities.activities === null || Activities.activities.length === 0) {
      Activities.activities = Activities.someActivities;
    }
    Activities.updateData();
  }
}
