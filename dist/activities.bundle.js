"use strict";
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["activities"],{

/***/ "./src/activities.js":
/*!***************************!*\
  !*** ./src/activities.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Activities)
/* harmony export */ });
class Activities {
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

  static addNewActivitie(description, completed) {
    const NewActivitie = new Activities(description, completed);
    Activities.activities.push(NewActivitie);
    activities.updateData();
  }

  static updateActivitie(description, completed, index) {
    const targetObj = Activities.activities.find((obj) => obj.index === parseInt(index, 10));
    targetObj.description = description;
    targetObj.completed = completed;
    Activities.updateData();
  }

  static removeActivite(index) {
    Activities.activities = Activities.activities.filter((item) => item.index !== index);
    Activities.updateData();
  }

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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/activities.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZpdGllcy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG9fbGlzdC8uL3NyYy9hY3Rpdml0aWVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjdGl2aXRpZXMge1xyXG4gIHN0YXRpYyBhY3Rpdml0aWVzID0gW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKGRlc2NyaXB0aW9uLCBjb21wbGV0ZWQpIHtcclxuICAgIGNvbnN0IG5ld0luZGV4ID0gQWN0aXZpdGllcy5hY3Rpdml0aWVzW0FjdGl2aXRpZXMuYWN0aXZpdGllcy5sZW5ndGggLSAxXS5pbmRleDtcclxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgIHRoaXMuY29tcGxldGVkID0gY29tcGxldGVkO1xyXG4gICAgdGhpcy5pbmRleCA9IG5ld0luZGV4O1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHNvbWVBY3Rpdml0aWVzID0gW1xyXG4gICAge1xyXG4gICAgICBkZXNjcmlwdGlvbjogJ3NvbWUgZGVzY3JpcHRpb24nLFxyXG4gICAgICBjb21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICBpbmRleDogMSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGRlc2NyaXB0aW9uOiAnc29tZSBvdGhlciBkZXNjcmlwdGlvbicsXHJcbiAgICAgIGNvbXBsZXRlZDogdHJ1ZSxcclxuICAgICAgaW5kZXg6IDIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBkZXNjcmlwdGlvbjogJ2EgbmV3IGRlc2NyaXB0aW9uJyxcclxuICAgICAgY29tcGxldGVkOiB0cnVlLFxyXG4gICAgICBpbmRleDogMyxcclxuICAgIH0sXHJcbiAgXTtcclxuXHJcbiAgc3RhdGljIGFkZE5ld0FjdGl2aXRpZShkZXNjcmlwdGlvbiwgY29tcGxldGVkKSB7XHJcbiAgICBjb25zdCBOZXdBY3Rpdml0aWUgPSBuZXcgQWN0aXZpdGllcyhkZXNjcmlwdGlvbiwgY29tcGxldGVkKTtcclxuICAgIEFjdGl2aXRpZXMuYWN0aXZpdGllcy5wdXNoKE5ld0FjdGl2aXRpZSk7XHJcbiAgICBhY3Rpdml0aWVzLnVwZGF0ZURhdGEoKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyB1cGRhdGVBY3Rpdml0aWUoZGVzY3JpcHRpb24sIGNvbXBsZXRlZCwgaW5kZXgpIHtcclxuICAgIGNvbnN0IHRhcmdldE9iaiA9IEFjdGl2aXRpZXMuYWN0aXZpdGllcy5maW5kKChvYmopID0+IG9iai5pbmRleCA9PT0gcGFyc2VJbnQoaW5kZXgsIDEwKSk7XHJcbiAgICB0YXJnZXRPYmouZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgIHRhcmdldE9iai5jb21wbGV0ZWQgPSBjb21wbGV0ZWQ7XHJcbiAgICBBY3Rpdml0aWVzLnVwZGF0ZURhdGEoKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyByZW1vdmVBY3Rpdml0ZShpbmRleCkge1xyXG4gICAgQWN0aXZpdGllcy5hY3Rpdml0aWVzID0gQWN0aXZpdGllcy5hY3Rpdml0aWVzLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5pbmRleCAhPT0gaW5kZXgpO1xyXG4gICAgQWN0aXZpdGllcy51cGRhdGVEYXRhKCk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgdXBkYXRlRGF0YSgpIHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhY3Rpdml0aWVzJywgSlNPTi5zdHJpbmdpZnkoQWN0aXZpdGllcy5hY3Rpdml0aWVzKSk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgbG9hZERhdGEoKSB7XHJcbiAgICBBY3Rpdml0aWVzLmFjdGl2aXRpZXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhY3Rpdml0aWVzJykpO1xyXG4gICAgaWYgKEFjdGl2aXRpZXMuYWN0aXZpdGllcyA9PT0gbnVsbCB8fCBBY3Rpdml0aWVzLmFjdGl2aXRpZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIEFjdGl2aXRpZXMuYWN0aXZpdGllcyA9IEFjdGl2aXRpZXMuc29tZUFjdGl2aXRpZXM7XHJcbiAgICB9XHJcbiAgICBBY3Rpdml0aWVzLnVwZGF0ZURhdGEoKTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9