export default class Activities {
  static activities = [];

  constructor(description, completed) {
    let newIndex = 0;
    if (Activities.activities.length === 0) {
      newIndex = 1;
    } else {
      newIndex = Activities.activities[Activities.activities.length - 1].index + 1;
    }
    this.description = description;
    this.completed = completed;
    this.index = newIndex;
  }

  static addNewActivitie(description, completed) {
    const NewActivitie = new Activities(description, completed);
    Activities.activities.push(NewActivitie);
    Activities.updateData();
  }

  static updateActivitie(description, completed, index) {
    const targetObj = Activities.activities.find((obj) => obj.index === parseInt(index, 10));
    targetObj.description = description;
    targetObj.completed = completed;
    Activities.updateData();
  }

  static removeActivite(index) {
    Activities.activities = Activities.activities.filter((item) => item.index !== parseInt(index));
    Activities.updateData();
  }

  static removeDone() {
    console.log('done removing');
    Activities.activities = Activities.activities.filter((item) => item.completed === false);
    Activities.updateData();
  }

  static updateData() {
    localStorage.setItem('activities', JSON.stringify(Activities.activities));
  }

  static loadData() {
    Activities.activities = JSON.parse(localStorage.getItem('activities'));
    if (Activities.activities === null || Activities.activities.length === 0) {
      Activities.activities = [];
    }
    Activities.updateData();
  }
}
