export default class activities {
  static activities = [];

  constructor(description, completed) {
    const newIndex = activities.activities[activities.activities.length - 1].index;
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

  static addNewActivitie(description,completed) {
    const NewActivitie = new activities(description, completed);
    activities.activities.push(NewActivitie);
    activities.updateData();
  }

  static updateActivitie(description, completed, index) {
    const targetObj = activities.activities.find((obj) => obj.index === parseInt(index, 10));
    targetObj.description = description;
    targetObj.completed = completed;
    activities.updateData();
  }

  static removeActivite(index) {
    activities.activities = activities.activities.filter((item) => item.index !== index);
    activities.updateData();
  }

  static updateData() {
    localStorage.setItem('activities', JSON.stringify(activities.activities));
  }

  static loadData() {
    activities.activities = JSON.parse(localStorage.getItem('activities'));
    if (activities.activities === null || activities.activities.length === 0) {
      activities.activities = activities.someActivities;
    }
    activities.updateData();
  }
}
