"use strict";
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["activities"],{

/***/ "./src/activities.js":
/*!***************************!*\
  !*** ./src/activities.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ activities)
/* harmony export */ });
class activities {
  static activities = [];

  constructor(description,completed) {
    const newIndex = activities.activities[activities.activities.length - 1].index;
    this.description = description;
    this.completed = completed;
    this.index = newIndex;
  }

  static someActivities = [
    {
      description: "some description",
      completed: false,
      index: 1,
    },
    {
      description: "some other description",
      completed: true,
      index: 2,
    },
    {
      description: "a new description",
      completed: true,
      index: 3,
    },
  ];

  static addNewActivitie(description,completed) {
    const NewActivitie = new activities(description,completed);
    activities.activities.push(NewActivitie);
    activities.updateData();
  }

  static updateActivitie(description, completed, index) {
    const targetObj = activities.activities.find((obj) => obj.index === parseInt(index));
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
    if(activities.activities === null || activities.activities.length === 0) {
      activities.activities  = activities.someActivities;
    }
    activities.updateData();
  }
}



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/activities.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZpdGllcy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kb19saXN0Ly4vc3JjL2FjdGl2aXRpZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgYWN0aXZpdGllcyB7XHJcbiAgc3RhdGljIGFjdGl2aXRpZXMgPSBbXTtcclxuXHJcbiAgY29uc3RydWN0b3IoZGVzY3JpcHRpb24sY29tcGxldGVkKSB7XHJcbiAgICBjb25zdCBuZXdJbmRleCA9IGFjdGl2aXRpZXMuYWN0aXZpdGllc1thY3Rpdml0aWVzLmFjdGl2aXRpZXMubGVuZ3RoIC0gMV0uaW5kZXg7XHJcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICB0aGlzLmNvbXBsZXRlZCA9IGNvbXBsZXRlZDtcclxuICAgIHRoaXMuaW5kZXggPSBuZXdJbmRleDtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBzb21lQWN0aXZpdGllcyA9IFtcclxuICAgIHtcclxuICAgICAgZGVzY3JpcHRpb246IFwic29tZSBkZXNjcmlwdGlvblwiLFxyXG4gICAgICBjb21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICBpbmRleDogMSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGRlc2NyaXB0aW9uOiBcInNvbWUgb3RoZXIgZGVzY3JpcHRpb25cIixcclxuICAgICAgY29tcGxldGVkOiB0cnVlLFxyXG4gICAgICBpbmRleDogMixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGRlc2NyaXB0aW9uOiBcImEgbmV3IGRlc2NyaXB0aW9uXCIsXHJcbiAgICAgIGNvbXBsZXRlZDogdHJ1ZSxcclxuICAgICAgaW5kZXg6IDMsXHJcbiAgICB9LFxyXG4gIF07XHJcblxyXG4gIHN0YXRpYyBhZGROZXdBY3Rpdml0aWUoZGVzY3JpcHRpb24sY29tcGxldGVkKSB7XHJcbiAgICBjb25zdCBOZXdBY3Rpdml0aWUgPSBuZXcgYWN0aXZpdGllcyhkZXNjcmlwdGlvbixjb21wbGV0ZWQpO1xyXG4gICAgYWN0aXZpdGllcy5hY3Rpdml0aWVzLnB1c2goTmV3QWN0aXZpdGllKTtcclxuICAgIGFjdGl2aXRpZXMudXBkYXRlRGF0YSgpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHVwZGF0ZUFjdGl2aXRpZShkZXNjcmlwdGlvbiwgY29tcGxldGVkLCBpbmRleCkge1xyXG4gICAgY29uc3QgdGFyZ2V0T2JqID0gYWN0aXZpdGllcy5hY3Rpdml0aWVzLmZpbmQoKG9iaikgPT4gb2JqLmluZGV4ID09PSBwYXJzZUludChpbmRleCkpO1xyXG4gICAgdGFyZ2V0T2JqLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICB0YXJnZXRPYmouY29tcGxldGVkID0gY29tcGxldGVkO1xyXG4gICAgYWN0aXZpdGllcy51cGRhdGVEYXRhKCk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgcmVtb3ZlQWN0aXZpdGUoaW5kZXgpIHtcclxuICAgIGFjdGl2aXRpZXMuYWN0aXZpdGllcyA9IGFjdGl2aXRpZXMuYWN0aXZpdGllcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaW5kZXggIT09IGluZGV4KTtcclxuICAgIGFjdGl2aXRpZXMudXBkYXRlRGF0YSgpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHVwZGF0ZURhdGEoKSB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYWN0aXZpdGllcycsIEpTT04uc3RyaW5naWZ5KGFjdGl2aXRpZXMuYWN0aXZpdGllcykpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGxvYWREYXRhKCkge1xyXG4gICAgYWN0aXZpdGllcy5hY3Rpdml0aWVzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWN0aXZpdGllcycpKTtcclxuICAgIGlmKGFjdGl2aXRpZXMuYWN0aXZpdGllcyA9PT0gbnVsbCB8fCBhY3Rpdml0aWVzLmFjdGl2aXRpZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIGFjdGl2aXRpZXMuYWN0aXZpdGllcyAgPSBhY3Rpdml0aWVzLnNvbWVBY3Rpdml0aWVzO1xyXG4gICAgfVxyXG4gICAgYWN0aXZpdGllcy51cGRhdGVEYXRhKCk7XHJcbiAgfVxyXG59XHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=